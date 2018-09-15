import check from '../helpers/check';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function logIn(params) {
  return dispatch => {
    if (check(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.userName,
        },
      })
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errMs: 'Incorrect input',
        },
        error: true, // https://github.com/redux-utilities/flux-standard-action
      })
    }
  }
}
export function logOut() {
	return {
		type: LOG_OUT
	};
}
