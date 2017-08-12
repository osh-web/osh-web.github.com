import React from 'react'

export default ({title}) => {
    return <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
          <span className="mdc-toolbar__title">{title}</span>
        </section>
      </div>
    </header>
};
