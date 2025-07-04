// @flow strict
import React from 'react'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import { Headline2, Headline3 } from '@material/react-typography'

import { SponsorBanner as Banner } from '../../atoms/SponsorBanner'
import type { Props as SponsorProps } from '../../atoms/SponsorBanner'
import type { Sponsor as Resource } from '../../resources'

const style = {
  margin: '3% 10%',
  boxSizing: 'border-box',
}

export function Sponsors({
  platinum,
  gold,
  silver,
  supporter,
}: {
  platinum: Resource[],
  gold: Resource[],
  silver: Resource[],
  supporter: Resource[],
}) {
  return (
    <Grid>
      <Row>
        <Cell>
          <Headline2>Sponsors</Headline2>
        </Cell>
      </Row>
      <Row>
        <Cell>
          {// TODO: リンクの記載を行う
          !(platinum.length || gold.length || silver.length)
            ? '現在募集中です'
            : null}
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Headline3>Platinum</Headline3>
        </Cell>
        {platinum.map(sponsor => (
          <Cell columns={12} style={style}>
            {Banner(toSponsor(sponsor))}
          </Cell>
        ))}
      </Row>
      <Cell>
        <Headline3>Gold</Headline3>
      </Cell>
      <Row>
        {gold.map(sponsor => (
          <Cell columns={6} desktopColumns={6} style={style}>
            {Banner(toSponsor(sponsor))}
          </Cell>
        ))}
      </Row>
      <Cell>
        <Headline3>Silver</Headline3>
      </Cell>
      <Row>
        {silver.map(sponsor => (
          <Cell columns={4} desktopColumns={3} style={style}>
            {Banner(toSponsor(sponsor))}
          </Cell>
        ))}
      </Row>
      <Cell>
        <Headline3>Supporter</Headline3>
      </Cell>
      <Row>
        {supporter.map(sponsor => (
          <Cell columns={4} desktopColumns={3} style={style}>
            {Banner(toSponsor(sponsor))}
          </Cell>
        ))}
      </Row>
    </Grid>
  )
}

function toSponsor({ banner, url, ...args }: Resource): SponsorProps {
  return { src: banner, href: url, ...args }
}
