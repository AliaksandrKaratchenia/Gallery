import reducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger();
const history = createHistory()
const  middleware = [routerMiddleware(history),thunk,logger];
const store = createStore(reducer, applyMiddleware(...middleware));
export {store,history};