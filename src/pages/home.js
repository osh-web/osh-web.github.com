// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu } from '../organisms/Menu'
import { Hero } from '../organisms/2019/Hero'
import { Speakers } from '../organisms/2019/Speakers'
import { speakers } from '../resources/2019/speakers'

export const home = () => (
  <div>
    <Hero />
    <Menu />
      <Speakers speakers={speakers}/>
    <Head>
      <title>オープンセミナー2019@広島</title>
    </Head>
  </div>
)

export default home
