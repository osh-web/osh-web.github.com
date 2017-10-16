import React from 'react'
import styled from 'styled-components'
import { Banner, Heading } from 'rebass'

const primary = '#D84315'
const accepnt = '#C62828'
const theme = 'いまさらチームビルディング'

const CustomBanner = Banner.extend`
  align-items: left;
`
const MapWrap = styled.span`
  margin-left: 10px;
  margin-top: -4px;
`
const map_url = 'https://goo.gl/maps/V6S6EQTARUE2'

export default () => (
  <CustomBanner color="white" bg={primary} >
    <Heading is="h1" f={[4, 8]}>
      オープンセミナー<br />2018@広島
    </Heading>
    <Heading is="h2" pt="20" f={[2, 6]}>
      {theme}
    </Heading>
    <Heading is="h2" pt="20" f={[3, 6]}>2018年2月24日(土)</Heading>
    <Heading is="a" pt="10" f={[1, 4]} href={map_url} color="white">
      サテライトキャンパスひろしま 501
    </Heading>
  </CustomBanner>
)
