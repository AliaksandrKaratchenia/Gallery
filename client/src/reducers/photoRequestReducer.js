
const THE_REQUEST_STARTED = 'THE_REQUEST_STARTED';
const REQUEST_SUCCESS= 'REQUEST_SUCCESS';

const initialState = {
    photos:[],
    loading:false
 }

 const photoRequestReducer = (state = initialState, action) =>{
    switch (action.type) {
      case THE_REQUEST_STARTED:
      return {
          ...state,
          loading:true
      }
      case REQUEST_SUCCESS:
        return {
            photos:[...state.photos ,...action.payload],
            loading:false
        }
      default:
        return state
    }
  }

  export default photoRequestReducer