import React from 'react'
import styled from 'styled-components'

import { color } from '../resources'

const { primary } = color

const level1 = component => styled(component)`
  box-shadow: 0px 0px 40px -7px #ccc;
`

const Base = ({ Link, to, className, children }) => (
  <Link className={className} to={to}>
    {children}
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
