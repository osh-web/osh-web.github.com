// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu, Hero, Speakers, Staff, Sponsors } from '../../organisms/2025'
import { speakers, staff, sponsors } from '../../resources/2025'

export default () => (
  <div>
    <Hero />
    <Menu />
    <Speakers speakers={speakers} />
    <Sponsors {...sponsors} />
    <Staff staff={staff} />
    <Head>
      <title>オープンセミナー2025@広島</title>
    </Head>
  </div>
)
