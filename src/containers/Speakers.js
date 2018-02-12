import React from 'react'

import H1 from '../components/2018/H1'
import speakers from '../resources/2018/speakers'

import style from './Speakers.css'

const Speakers = () => (
  <div>
    <H1>セッション</H1>
    <div className={style.container}>
      {speakers.map(({session, key, furi, company, name, description, title}) => (
        <div key={key} className={style.item}>
          <h2 className={style.title}>
            {session.name}
          </h2>
          <p className={style.description}>
            {session.description}
          </p>
          <span className={style.furi}>{furi}</span>
          <h3 className={style.name}>{name}</h3>
          <div>
            <img src={`/img/2018/${key}.png`} alt={`${name}`}/>
            <p className={style.profile}>{description}</p>
            {title}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Speakers