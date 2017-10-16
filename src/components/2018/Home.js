// @flow
import React from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

import Hero from './Hero.js'
import SeminarList from '../SeminarList.js'
import Footer from '../Footer'

export default () => (
  <Box>
    <Hero />
    <Box mb={[20, 100]}>
      <SeminarList />
    </Box>
    <Footer />
  </Box>
)
