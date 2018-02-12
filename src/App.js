import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import { injectGlobal } from 'styled-components'

import Jsonld from './json_ld.js'
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

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="content">
        <Routes />
        <Footer Link={Link} />
        <Jsonld />
      </div>
    </ScrollToTop>
  </Router>
)
export default hot(module)(App)