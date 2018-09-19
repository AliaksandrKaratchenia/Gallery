import check from '../helpers/check';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';

export const LogInSuccess = (params) => {
	return {
		type: LOG_IN,
		payload: {
			name: params.userName
		}
	};
};
export const LogINFailed = () => {
	return {
		type: LOG_IN_FAILURE,
		payload: {
			errMs: 'Incorrect input'
		}
	};
};

export const LogInRequest = () => {
	return {
		type: LOG_IN_REQUEST
	};
};

export function logIn(params) {
	return (dispatch) => {
		dispatch(LogInRequest());
		if (check(params)) {
			const data = JSON.stringify({
				userName: params.userName,
				password: params.password
			});
			fetch('/create', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: data
			}).then((res) => {
				if (res.ok) {
					res.json().then((saved) => {
						if (saved) dispatch(LogInSuccess(params));
						else dispatch(LogINFailed());
					});
				} else dispatch(LogINFailed());
			});

			// .then(response => {
			//   if(response.ok){
			//     response.json().then(data => {
			//       dispatch(fetchTodosSuccess(data.todos,data.message));
			//     })
			//   }
			//   else{
			//     response.json().then(error => {
			//       dispatch(fetchTodosFailed(error));
			//     })
			//   }
			// })

			// https://github.com/redux-utilities/flux-standard-action
			// dispatch(LogInSuccess(params))
		} else {
			dispatch(LogINFailed());
		}
	};
}

export function logOut() {
	return {
		type: LOG_OUT
	};
}
