// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu, Hero, Speakers, Staff, Sponsors } from '../../organisms/2023'
import { speakers, staff, sponsors } from '../../resources/2023'

export default () => (
  <div>
    <Hero />
    <Menu />
    <Speakers speakers={speakers} />
    <Sponsors {...sponsors} />
    <Staff staff={staff} />
    <Head>
      <title>オープンセミナー2023@広島</title>
    </Head>
  </div>
)
