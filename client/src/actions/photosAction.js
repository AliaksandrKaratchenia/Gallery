export const THE_REQUEST_STARTED = 'THE_REQUEST_STARTED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export const requestStarted = () => {
	return {
		type: THE_REQUEST_STARTED,
	};
};

export const requestSuccess = (params) => {
	return {
		type: REQUEST_SUCCESS,
		payload: params
	};
};

export function getPhotosFromServer(params) {
	return (dispatch) => {
		dispatch(requestStarted());
		const options= JSON.stringify({
			pageNumber: params.pageNumber,
			query: params.query
		});
		fetch('/getPhotos',{
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: options
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data In action",data);
				dispatch(requestSuccess(data.data));
			})
			.catch(function() {
				console.log('error');
			});
	};
}
