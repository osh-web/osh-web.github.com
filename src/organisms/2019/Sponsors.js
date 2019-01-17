// @flow strict
import React from 'react'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import {
    Headline2,
} from '@material/react-typography'

import { SponsorBanner as Banner } from '../../atoms/SponsorBanner'
import type { Props as SponsorProps } from '../../atoms/SponsorBanner'
import type { Sponsor as Resource } from '../../resources'

export function Sponsors({ platinum, gold }: { platinum: Resource[], gold: Resource[] }) {
  return (
    <Grid>
        <Row>
            <Cell>
                <Headline2>Sponsors</Headline2>
            </Cell>
        </Row>
      <Row style={{margin: "0 0 80px 0"}}>
        <Cell columns={6}>{platinum.map(toSponsor).map(Banner)}</Cell>
      </Row>
      <Row>
        <Cell columns={4}>{gold.map(toSponsor).map(Banner)}</Cell>
      </Row>
    </Grid>
  )
}

function toSponsor({ banner, url, ...args }: Resource): SponsorProps {
  return { src: banner, href: url, ...args }
}
