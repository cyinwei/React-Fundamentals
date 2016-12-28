import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/stateless/Main'
import Home from '../components/stateless/Home'

const Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default Routes
