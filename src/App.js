import React, { Component } from 'react'
import Helmet from 'react-helmet'

import '@material/typography/dist/mdc.typography.css';
import "@material/theme/dist/mdc.theme.css";

import Toolbar from './components/Toolbar'

import './App.css'
import SeminarList from './Seminar.js'



const Hero = () => {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const style = {
    padding: "0 20px",
    height: "60%",
    color: "white",
    backgroundColor: "#E64A19",
    ...centerStyle,
  }
  return <section className="mdc-typography" style={{...style}}>
    <div>
      <h1 className="mdc-typography--display1">オープンセミナー2018@広島</h1>
      <p className="mdc-typography--body1">2018年2月24日開催予定</p>
      <p className="mdc-typography--body1">詳細は随時公開予定</p>
    </div>
  </section>
}

const App = () => {
  return <div style={{height: "100%"}}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <Toolbar title="オープンセミナー広島" />
      <Hero />
      <SeminarList />
    </div>
};

export default App;
