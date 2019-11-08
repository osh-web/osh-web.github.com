import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Footer from './organisms/Footer'
import Jsonld from './json_ld.js'

import './App.scss'
import './MDC.scss'

const App = () => (
  <Root>
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*"/>
        </Router>
      </React.Suspense>
      <Footer />
      <Jsonld />
    </div>
  </Root>
)
export default App
