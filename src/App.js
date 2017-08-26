import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Toolbar from './components/Toolbar'
import SeminarList from './Seminar.js'
import './App.css'

const Hero = () => {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const style = {
    padding: "0 20px",
    height: "60%",
    ...centerStyle,
  }
  return <section className="mdc-typography mdc-theme--primary-bg" style={{...style}}>
    <div>
      <h1 className="mdc-typography--display1 mdc-theme--text-primary-on-primary">オープンセミナー2018@広島</h1>
      <p className="mdc-typography--title mdc-theme--text-secondary-on-primary">
      	2018年2月24日開催予定<br />
        詳細は随時公開していきます。
      </p>
    </div>
  </section>
}

const App = () => {
  return <div>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <Toolbar title="オープンセミナー広島" />
      <Hero />
      <SeminarList />
    </div>
};

export default App;
