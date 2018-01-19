
import React from 'react'
import { Flex } from 'grid-styled'

import { platinum, gold, silver } from '../resources/2018/sponsors'

const maxWidth = 480

const Bannar = ({ url, imagePath, name, key, width, maxWidth }) => (
  <a href={url} key={key} style={{ width, maxWidth }}>
    <img src={imagePath} alt={name} style={{ width: '100%' }} />
  </a>
)

const keyToImagePath = sponsor => {
  const { key } = sponsor
  return {
    ...sponsor,
    imagePath: `/img/2018/${key}.png`,
  }
}


const platinumToBannar = sponsor => ({
  ...sponsor,
  width: '100%',
})

const goldToBannar = sponsor => ({
  ...sponsor,
  width: '50%',
})

const silverToBannar = sponsor => ({
  ...sponsor,
  width: '33%',
})

const filterBannar = ({ bannar }) => bannar

const platinumBannar = platinum
  .filter(filterBannar)
  .map(keyToImagePath)
  .map(platinumToBannar)
const goldBannar = gold
  .filter(filterBannar)
  .map(keyToImagePath)
  .map(goldToBannar)
const silverBannar = silver
  .filter(filterBannar)
  .map(keyToImagePath)
  .map(silverToBannar)


const sponsor_groups = [
  platinumBannar,
  goldBannar,
  silverBannar,
]

const SponsorBannars = () => (
  <Flex wrap justify="center">
    {sponsor_groups.map(sponsors => (
      <Flex justify="center" wrap m={20} style={{ maxWidth }}>
        {sponsors.map(Bannar)}
      </Flex>
    ))}
  </Flex>
)

export default SponsorBannars
