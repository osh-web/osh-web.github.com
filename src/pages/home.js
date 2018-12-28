// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu } from '../organisms/Menu'
import { Hero } from '../organisms/2019/Hero'

export const home = () => (
  <div>
    <Hero />
    <Menu />
    <Head>
      <title>オープンセミナー2019@広島</title>
    </Head>
  </div>
)

export default home
