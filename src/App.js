import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import Footer from './components/Footer'
import Jsonld from './json_ld.js'

import './App.scss'
import './MDC.scss'

const App = () => (
  <Root>
    <div className="content">
      <Routes />
      <Footer Link={Link}/>
      <Jsonld />
    </div>
  </Root>
)
export default App
