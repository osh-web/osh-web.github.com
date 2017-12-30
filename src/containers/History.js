// @flow
import React from 'react'
import { Box, Flex } from 'grid-styled'
import { Link } from 'react-static'

import { BackButton } from '../components'
import H1 from '../components/2018/H1'
import { seminarList } from '../resources'


const BoxWrap = Box.extend`
  color: black;
  text-decoration: none;
`

const Seminar = ({ name, theme, url }) => (
  <BoxWrap is="a" href={url} width={[1, 0.48]} py={20} pl={[6, 20]} f={[1, 4]} mb={[20, 50]} mr={10}>
    <h1 f={[1, 3]} color={'#666'}>
      {name}
    </h1>
    <h2 pt={1} f={[2, 2, 4]}>
      {theme}
    </h2>
  </BoxWrap>
)

export default () => (
  <Box>
    <H1 f={[2, 5]} p={[2, 4]} mx={24} my={10}>
      これまでのオープンセミナー広島
    </H1>
    <Flex wrap pl={[20, 100]} pt={[10, 40]}>
      {seminarList.map(seminar => <Seminar {...seminar} />)}
    </Flex>
    <BackButton Link={Link} to="/">HOME</BackButton>,
  </Box>
)
