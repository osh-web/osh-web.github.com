import React from 'react'

import Toolbar from './Toolbar'
import SeminarList from '../Seminar.js'
import '../App.css'

const Hero = () => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const style = {
    padding: '0 20px',
    height: '60%',
    ...centerStyle,
  }
  const theme = 'いまさらチームビルディング'
  return (
    <section className="mdc-typography mdc-theme--primary-bg" style={{ ...style }}>
      <div>
        <h1 className="mdc-typography--display1 mdc-theme--text-primary-on-primary">オープンセミナー2018@広島</h1>
        <p className="mdc-typography--title mdc-theme--text-secondary-on-primary">
          2018年2月24日<br />
          「{theme}」<br />
          詳細は随時公開していきます。
        </p>
      </div>
    </section>
  )
}

export default () => (
  <div>
    <Toolbar title="オープンセミナー広島" />
    <Hero />
    <SeminarList />
  </div>
)
