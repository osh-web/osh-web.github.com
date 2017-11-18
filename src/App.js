import React from 'react'
import { Router, Route, Switch, Redirect, Link } from 'react-static'
import { injectGlobal } from 'styled-components'

import Jsonld from './json_ld.js'
import { About, History, Speaker, Home } from './containers'
import { Footer } from './components/'

injectGlobal`
* {
  font-family: "Noto Sans Japanese";
}

body {
  margin: 0;
  padding: 0;
}
`


export default () => (
  <Router>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/speakers/" component={Speaker} />
        <Route path="/history/" component={History} />
        <Redirect to="/" />
      </Switch>
      <Footer Link={Link} />
      <Jsonld />
    </div>
  </Router>
)
