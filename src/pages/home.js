// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu, Hero, Speakers, Staff, Sponsors } from '../organisms'
import { speakers, staff, sponsors } from '../resources'

export const home = () => (
  <div>
    <Hero />
    <Menu />
    <Speakers speakers={speakers} />
    <Sponsors sponsors={sponsors} />
    <Staff staff={staff} />
    <Head>
      <title>オープンセミナー2019@広島</title>
    </Head>
  </div>
)

export default home
