import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-static'

import Jsonld from './json_ld.js'
import Home2018 from './components/2018/Home'

export default () => (
  <Router>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home2018} />
        <Redirect to="/" />
      </Switch>
      <Jsonld />
    </div>
  </Router>
)
