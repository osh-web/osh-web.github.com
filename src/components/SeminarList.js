// @flow
import React from 'react'
import styled from 'styled-components'
import { PanelHeader, Heading, Subhead, Box, Flex, Button, NavLink } from 'rebass'

const seminar_list = [
  {
    name: 'オープンセミナー2017@広島',
    theme: 'エンジニアがより良い社会を作れる!!',
    url: '/2017/',
  },
  {
    name: 'オープンセミナー2016@広島',
    theme: 'みんなでつくろうモダンな開発現場',
    url: '/2016/',
  },
  {
    name: 'オープンセミナー2015@広島',
    theme: 'クラウド時代の構成管理入門',
    url: '/2015/',
  },
  {
    name: 'オープンセミナー2014@広島',
    theme: 'TDD…そして Be Agile',
    url: 'http://osh-2014.github.io/',
  },
  {
    name: 'オープンセミナー2013@広島',
    theme: 'モバイルプラットフォームとJava',
    url: '/2013/',
  },
]

const BoxWrap = styled(Box)`
  border-left: solid 1px #aaa;
  color: black;
  text-decoration: none;
`

const Seminar = ({ name, theme, url }) => (
  <BoxWrap is="a" href={url} width={[1, 0.48]} py={40} pl={[6, 20]} f={[1, 4]} mb={[20, 50]} mr={10}>
    <Subhead f={[1, 3]} color={'#666'}>
      {name}
    </Subhead >
    <Subhead pt={1} f={[2, 2, 4]}>
      {theme}
    </Subhead>
  </BoxWrap>
)

export default () => (
  <Box>
    <Subhead f={[2, 5]} p={[2, 4]} mx={24} my={10}>
      これまでのオープンセミナー広島
    </Subhead>
    <Flex wrap pl={[20, 100]} pt={[10, 40]}>
      {seminar_list.map(seminar => <Seminar {...seminar} />)}
    </Flex>
  </Box>
)
