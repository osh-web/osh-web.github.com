// @flow
import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Golden, Half } from 'grid-styled'
import { Link } from 'react-static'

import { Hero } from '../components/2018'

const level1 = component => styled(component)`
  box-shadow: 0px 0px 4px 0px #aaa;
`

const ListButtonInner = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)

const ListButton = styled(ListButtonInner)`
  display: block;
  padding: 10px;
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
  {
    to: '/speakers',
    text: 'スピーカー',
  },
  {
    to: '/history',
    text: 'これまでのオープンセミナー',
  },
]

export default () => (
  <div>
    <Hero />
    <Flex wrap>
      {menuList.map(({ to, text }) => (
        <Half>
          <ListButton to={to}>
            {text}
          </ListButton>
        </Half>
      ))}
    </Flex>
  </div>
)
