// @flow
import React from 'react'
import styled from 'styled-components'
import { Flex, Half } from 'grid-styled'
import { Head } from 'react-static'
import { Link } from '@reach/router'
import { primary } from '../resources/color'

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
      <title>オープンセミナー2019@広島</title>
    </Head>
    <Menu />
    <h1 style={{
        margin: 0,
        backgroundColor: primary,
        color: '#eee',
        fontSize: '22px',
        padding: '20% 0',
        textAlign: 'center'
    }}>
        オープンセミナー2019@広島<br />2019年2月23日開催決定
    </h1>
  </div>
)
