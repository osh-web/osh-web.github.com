import React from 'react'
import { Flex } from 'grid-styled'

import { Box, Grid } from '../Box'
import { color } from '../../resources'

const { primary, accent } = color

const Banner = Box.extend`
  background-color: ${primary};
  align-items: left;
  a {
    color: white;
  }
`

const eventDate = '2018年2月24日(土)'
const EventDate = () => (
  <div>{eventDate}</div>
)


const mapUrl = 'https://goo.gl/maps/V6S6EQTARUE2'
const Place = props => (
  <div {...props}>
    <a href={mapUrl}>
      サテライトキャンパスひろしま 501
    </a>
  </div>
)

const themeText = 'いまさらチームビルディング'
const EventTheme = () => (
  <div>{themeText}</div>
)
const EventName = () => (
  <div>
    <Grid>オープンセミナー</Grid>
    <Grid>2018@広島</Grid>
  </div>
)


const Button = Grid.extend`
  display: box;
  margin: 10px;
  padding: 12px 58px;
  text-align: center;
  background-color: ${primary};
  color: white;
  font-size: 18px;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);
`

const EntryPageButton = () => (
  <a href="https://osh.connpass.com/event/69092/">
    <Button>
      申し込みページへ
    </Button>
  </a>
)

export default () => (
  <Banner
    px={[20, 25]}
    py={[40, 120]}
    color="white"
  >
    <Box f={[5, 6]}>
      <EventName />
    </Box>
    <Box f={[3, 5]}>
      <EventTheme />
    </Box>
    <Box mt={10} f={[5, 6]}>
      <EventDate />
    </Box>
    <Box f={[3, 4]}>
      <Place f={[4]} />
    </Box>
    <Flex justify="center" pt={40}>
      <EntryPageButton />
    </Flex>
  </Banner>
)
