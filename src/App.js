import React, { Component } from 'react'
import './App.css'
import NotMatch from './components/NotMatch.js'
import LinkBtn from './components/LinkBtn.js'
// import NavBar from './components/NavBar.js';
import { Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Profile from './components/Profile.js'
import News from './components/News.js'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {...state }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.lg = props.onLogin;
    console.log(props,"In App");
  }
  render () {
    return (
      <div className='App'>
        <div>
          <LinkBtn to='/' label={'Главная'} />
          {' '}
          <LinkBtn to='/profile' label={'Профиль'} />
          {' '}
          <LinkBtn to='/news' label={'Новости'} />
          {' '}
          <LinkBtn to='/login' label={'Логин'} />
          {' '}
        </div> <div>
          <Switch>
            <Route path='/' exact component={Home} />
            {' '}
            <Route path='/login' component={this.lg ? Home : Login} />
            {' '}
            <Route path='/news' component={News} />
            {' '}
            <Route path='/profile' component={this.lg ? Profile : Login} />
            {' '}
            <Route component={NotMatch} />
            {' '}
          </Switch>
        </div>

      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, null)(App))
