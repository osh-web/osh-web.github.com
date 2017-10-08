import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-static'

import Jsonld from './json_ld.js'
import Event2018 from './components/Event2018'

export default () => (
  <Router>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Event2018} />
        <Redirect to="/" />
      </Switch>
      <Jsonld />
    </div>
  </Router>
)
