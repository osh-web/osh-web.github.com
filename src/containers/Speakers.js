import React from 'react'

import H1 from '../components/2018/H1'
import speakers from '../resources/2018/speakers'

import style from './Speakers.css'

const Speakers = () => (
  <div className={style.Speakers}>
    <H1>スピーカー</H1>
    <div>
      {speakers.map((speaker) => (
        <img src={`/img/2018/${speaker.key}.png`}/>
      ))}
    </div>
  </div>
)

export default Speakers