import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { color } from '../resources'

const { primary } = color

const level1 = component => styled(component)`
  box-shadow: 0px 0px 40px -7px #ccc;
`

const Base = ({ Link, to, className, children }) => (
  <Link style={{ color: 'white', textDecoration: 'none' }} to={to}>
    <Flex className={className} justify="center" align="center">
      {children}
    </Flex>
  </Link>
)

export default styled(Base)`
  position: fixed;
  right: 20px;
  bottom: 40px;
  width: 60px;
  height: 60px;

  border-radius: 60px;
  box-shadow: 0px 0px 20px -7px #ccc;
  color: white;
  background-color: ${primary};
  text-decoration: none;
`
