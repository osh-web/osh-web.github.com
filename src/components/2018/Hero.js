import h from 'react-hyperscript'
import styled from 'styled-components'
import { Box, Grid } from 'grid-styled'

import { color } from '../../resources'

const { primary } = color
const themeText = 'いまさらチームビルディング'

const Banner = Box.extend`
  color: white;
  background-color: ${primary};
  min-height: 40vh;
  align-items: left;
`

const Date = h('h2', {
  is: 'h2',
  pt: 20,
  f: [3, 6],
}, [
  '2018年2月24日(土)',
])

const mapUrl = 'https://goo.gl/maps/V6S6EQTARUE2'
const Place = h('h2', {
  is: 'a',
  f: [1, 4],
  href: mapUrl,
  color: 'white',
}, [
  'サテライトキャンパスひろしま 501',
])

const Theme = h('h2', {
  is: 'h2',
  f: [2, 6],
}, [
  themeText,
])

const Event = h('h1', {
  is: 'h1',
  f: [5, 8],
}, [
  h(Grid, 'オープンセミナー'),
  h(Grid, '2018@広島'),
])

const StyledTheme = Theme


export default () => (
  h(Banner, {
    px: ['20px', '25px'],
    py: ['40px', '120px'],
    color: 'white',
    bg: primary,
  }, [
    Event,
    StyledTheme,
    Date,
    Place,
  ])
)
