// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu, Hero, Speakers, Staff } from '../organisms'
import { speakers, staff } from '../resources'

export const home = () => (
  <div>
    <Hero />
    <Menu />
    <Speakers speakers={speakers} />
    <Staff staff={staff} />
    <Head>
      <title>オープンセミナー2019@広島</title>
    </Head>
  </div>
)

export default home
