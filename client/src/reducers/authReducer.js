 const LOG_IN = 'LOG_IN';
 const LOG_OUT = 'LOG_OUT';
 const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

const initialState = {
    isAuthenticated: false,
    user: {
      userName: '',
      password: ''
    },
    errMs:''
  }


  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          isAuthenticated: true,
          user:{
            userName: action.payload.name
          }
        }
      case LOG_OUT:
        return {
          ...state,
          isAuthenticated: false,
          user: {
            userName: '',
            password: ''
          },
          errMs:''

        }

        case LOG_IN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          errMs:action.payload.errMs
        }
      default:
        return state
    }
  }

  export default authReducer;