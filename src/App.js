import React, { Component } from 'react'
import { Router, browserHistory, Route } from 'react-router'
import Home from './component/routers/Home'
import About from './component/routers/About'
import Login from './component/routers/Login'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
      </Router>
    )
  }
}

export default App
