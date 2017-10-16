import h from 'react-hyperscript'
import { Banner, Heading } from 'rebass'

import { primary } from '../../color'

const themeText = 'いまさらチームビルディング'

const CustomBanner = Banner.extend`
  align-items: left;
`

const Date = h(Heading, {
  is: 'h2',
  pt: 20,
  f: [3, 6],
}, [
  '2018年2月24日(土)',
])

const mapUrl = 'https://goo.gl/maps/V6S6EQTARUE2'
const Place = h(Heading, {
  is: 'a',
  pt: 10,
  f: [1, 4],
  href: mapUrl,
  color: 'white',
}, [
  'サテライトキャンパスひろしま 501',
])

const Theme = h(Heading, {
  is: 'h2',
  pt: 20,
  f: [2, 6],
}, [
  themeText,
])

const Event = h(Heading, {
  is: 'h1',
  f: [4, 8],
}, [
  'オープンセミナー',
  h('br'),
  '2018@広島',
])

export default () => (
  h(CustomBanner, {
    color: 'white',
    bg: primary,
  }, [
    Event,
    Theme,
    Date,
    Place,
  ])
)
/*
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
  */
