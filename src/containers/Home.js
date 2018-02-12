// @flow
import React from 'react'
import styled from 'styled-components'
import { Flex, Half } from 'grid-styled'
import { Link, Head } from 'react-static'

import { Hero, H1, H2 } from '../components/2018'
import Information from '../components/2018/Information'
import EventAbstract from '../containers/EventAbstract'
import SponsorBannars from '../containers/SponsorBannars'
import Speakers from '../containers/Speakers'

const ListButtonInner = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)

const ListButton = styled(ListButtonInner)`
  display: block;
  padding: 18px;
  text-decoration: none;
  color: black;
  text-align: center;
  font-weight: 200;
`

const menuList = [
  {
    to: '/about',
    text: '初めての方へ',
  },
  /*
  {
    to: '/2018/sessions',
    text: 'セッション',
  },
  {
    to: '/2018/staff',
    text: 'スタッフ',
  },
  */
  {
    to: '/history',
    text: 'これまでのオープンセミナー',
  },
]

const Menu = () => (
  <Flex wrap>
    {menuList.map(({ to, text }) => (
      <Half>
        <ListButton to={to}>{text}</ListButton>
      </Half>
    ))}
  </Flex>
)

export default () => (
  <div>
    <Head>
      <title>オープンセミナー2018@広島</title>
    </Head>
    <Hero />
    <Menu />
    <Information />
    <Speakers/>
    <EventAbstract />
    <SponsorBannars />
  </div>
)
