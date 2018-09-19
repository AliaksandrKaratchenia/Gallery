import authReducer from './authReducer';
import photoRequestReducer from './photoRequestReducer';
//import reducerUser from './reducerUser';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
export default combineReducers({ routerReducer, authReducer, photoRequestReducer});
