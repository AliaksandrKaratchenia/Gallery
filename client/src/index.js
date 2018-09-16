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
import App from './App';
//const apiKey ="AIzaSyDKu21tXn5KelkOuPEXbqS3tfPZNmT0jjE";


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

//render(<App/>,	document.getElementById('root') );
