import React, { Component } from 'react';
import Link from "gatsby-link"
import '@material/card/dist/mdc.card.css';


const seminar_list = [
  {
    'name': 'オープンセミナー2017@広島',
    'theme': 'エンジニアがより良い社会を作れる!!',
    'url': '/2017/'
  },
  {
    'name': 'オープンセミナー2016@広島',
    'theme': 'みんなでつくろうモダンな開発現場',
    'url': '/2016/'
  },
  {
    'name': 'オープンセミナー2015@広島',
    'theme': 'クラウド時代の構成管理入門',
    'url': '/2015/'
  },
  {
    'name': 'オープンセミナー2014@広島',
    'theme': 'TDD…そして Be Agile',
    'url': 'http://osh-2014.github.io/'
  },
  {
    'name': 'オープンセミナー2013@広島',
    'theme': 'モバイルプラットフォームとJava',
    'url': '/2013/'
  },
]

const Seminar = ({name, theme, url}) => {

  const clickHandler = (url) => {
    return (event) => location = url;
  }
  return <a href={url} style={{textDecoration: "none"}}>
    <div className="mdc-card"
      style={{margin: "16px 8px", color: "white"}}
    >
      <section className="mdc-card__primary">
        <h1 className="mdc-card__subtitle">{name}</h1>
        <h2 className="mdc-card__title mdc-card__title--large">{theme}</h2>
      </section>
    </div>
  </a>
}

const SeminarList = () => {
  return <div className="Content">
  <header className="mdc-toolbar mdc-theme--accent-bg">
  <div className="mdc-toolbar__row">
  <section className="mdc-toolbar__section">
  <span className="mdc-toolbar__title">これまでのオープンセミナー広島</span>
  </section>
  </div>
  </header>
  {seminar_list.map((seminar) => <Seminar {...seminar}/>)}
  </div>
}

export default SeminarList;
