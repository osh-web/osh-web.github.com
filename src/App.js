import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Toolbar from './components/Toolbar'

import './App.css'

const App = () => {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return <div style={{height: "100%"}}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <Toolbar title="オープンセミナー広島" />
      <section className="mdc-typography" style={{margin: "0 20px",height: "80%", ...centerStyle} }>
        <div>
          <h1 className="mdc-typography--display1">オープンセミナー2018@広島</h1>
          <p className="mdc-typography--body1">2018年2月開催予定</p>
        </div>
      </section>
    </div>
};

export default App;
