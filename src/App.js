import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '@material/toolbar/dist/mdc.toolbar.css'

const Toolbar = ({title}) => {
    return <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
          <span className="mdc-toolbar__title">{title}</span>
        </section>
      </div>
    </header>
};

const App = () => {
    return <div>

    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <Toolbar title="オープンセミナー広島" />
    </div>
};

export default App;
