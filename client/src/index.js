import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import { Route, Switch } from 'react-router';
import { store} from './store/store';
// import Login from './components/Login';
// import Home from './components/Home';
// import PrivateRoute from './components/PrivateRoute';
// import News from './components/News';
import NavBar from './components/NavBar';
//import Gallery from './App';
// import {Sw } from './components/SW';


render(
<Provider store={store}>
<NavBar/>
</Provider>,
	document.getElementById('root')
);

//render(<App/>,	document.getElementById('root') );
