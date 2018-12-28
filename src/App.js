import React from 'react'
import { Root, Routes } from 'react-static'
import Footer from './organisms/Footer'
import Jsonld from './json_ld.js'

import './App.scss'
import './MDC.scss'

const App = () => (
  <Root>
    <div className="content">
      <Routes />
      <Footer />
      <Jsonld />
    </div>
  </Root>
)
export default App
