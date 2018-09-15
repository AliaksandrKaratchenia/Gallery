// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Router} from 'react-router-dom'
// import { createHashHistory } from 'history'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import reducer from './reducers/reducer.js'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'
// import { ROUTING } from './actions/userActions'
// import './index.css';
// import { routerMiddleware, push } from 'react-router-redux'
// import { syncHistoryWithStore } from 'react-router-redux';

// //const history = createBrowserHistory();
// // const mw = routerMiddleware(history)
// // const redirect = store => next => action => {
// //   if (action.type === ROUTING) {
// //     console.log(history);
// //     history[action.payload.method](action.payload.nextUrl)
// //   }

// //   return next(action)
// // }

// const middleware = [thunk,logger];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

// const store = createStore(reducer, applyMiddleware(...middleware))
// //const history = syncHistoryWithStore(hashHistory, store);
// const history = syncHistoryWithStore(createHashHistory(), store);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>,
//     document.getElementById('root')
// )
// registerServiceWorker()

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { connect, Provider } from 'react-redux'
// import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
//  import { createLogger } from 'redux-logger'
// import { createStore, applyMiddleware } from 'redux'
// import createHistory from 'history/createBrowserHistory'

// import { Link } from 'react-router-dom'
// import { Route, Switch } from 'react-router'

// const history = createHistory()
// const logger = createLogger();
// const store = createStore(
//   routerReducer,
//   applyMiddleware(routerMiddleware(history)),
//   applyMiddleware(logger)
// )

// const ConnectedSwitch = connect(state => ({
//   location: state.location
// }))(Switch)

// const AppContainer = () => (
//   <ConnectedSwitch>
//     <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
//     <Route path="/about" component={() => (<h1>About <Link to="/">Home</Link></h1>)} />
//   </ConnectedSwitch>
// )

// const App = connect(state => ({
//   location: state.location,
// }))(AppContainer)

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root'),
// )

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { store, history } from './store/store';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import News from './components/News';
import NavBar from './components/NavBar';
const apiKey ="AIzaSyDKu21tXn5KelkOuPEXbqS3tfPZNmT0jjE";

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<React.Fragment>
				<NavBar />
				<Switch>
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/news" component={News} />
					<PrivateRoute exact path="/" component={Home} />
				</Switch>
			</React.Fragment>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
