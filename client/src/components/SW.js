import React from 'react';
//import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import Login from './Login';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import News from './News';

export const Sw = (
	<Switch>
		<Route path="/login" component={Login} />
		<PrivateRoute exact path="/news" component={News} />
		<PrivateRoute exact path="/" component={Home} />
	</Switch>
);
