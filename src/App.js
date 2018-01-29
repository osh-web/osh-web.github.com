import React, { Component } from 'react'
import { Router, Route, Switch, Redirect, Link } from 'react-static'
import { withRouter } from 'react-router'
import { injectGlobal } from 'styled-components'

import Jsonld from './json_ld.js'
import { About, History, Session, Home, Staff } from './containers'
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

class ScrollToTopBase extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

const ScrollToTop = withRouter(ScrollToTopBase)

export default () => (
  <Router>
    <ScrollToTop>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/2018/sessions/" component={Session} />
          <Route path="/2018/staff/" component={Staff} />
          <Route path="/history/" component={History} />
          <Redirect to="/" />
        </Switch>
        <Footer Link={Link} />
        <Jsonld />
      </div>
    </ScrollToTop>
  </Router>
)
