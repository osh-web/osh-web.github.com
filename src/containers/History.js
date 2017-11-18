// @flow
import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import { Link } from 'react-static'

import { BackButton } from '../components'
import { seminarList } from '../resources'


const BoxWrap = styled.div`
  border-left: solid 1px #aaa;
  color: black;
  text-decoration: none;
`

const Seminar = ({ name, theme, url }) => (
  <BoxWrap is="a" href={url} width={[1, 0.48]} py={40} pl={[6, 20]} f={[1, 4]} mb={[20, 50]} mr={10}>
    <h1 f={[1, 3]} color={'#666'}>
      {name}
    </h1>
    <h1 pt={1} f={[2, 2, 4]}>
      {theme}
    </h1>
  </BoxWrap>
)

export default () => (
  <Box>
    <h1 f={[2, 5]} p={[2, 4]} mx={24} my={10}>
      これまでのオープンセミナー広島
    </h1>
    <Flex wrap pl={[20, 100]} pt={[10, 40]}>
      {seminarList.map(seminar => <Seminar {...seminar} />)}
    </Flex>
    <BackButton Link={Link} to="/" />,
  </Box>
)
