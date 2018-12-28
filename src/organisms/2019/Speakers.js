// @flow strict
import React from 'react'
import Card, { CardMedia } from '@material/react-card'
import { Button } from '@material/react-button'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import {
  Body2,
  Headline1,
  Headline2,
  Caption,
} from '@material/react-typography'

const Speaker = ({ name, furi, description, id, title, company }) => (
  <Card className="mdc-elevation--z1" outlined>
    <CardMedia imageUrl={`/img/2019/${id}.jpg`} square />
    <div style={{ padding: '0 16px' }}>
      <Headline1 style={{ fontSize: 18, lineHeight: 1 }}>
        セッション内容 TBD
      </Headline1>
      <Caption>{furi} </Caption>
      <Headline1 style={{ fontSize: 18, lineHeight: 1 }}>
        {name} <Button href={company.uri}>{company.name}</Button>
      </Headline1>
      <Body2>{description}</Body2>
      <Body2>{title}</Body2>
    </div>
  </Card>
)

export const Speakers = ({ speakers }) => (
  <Grid>
    <Row>
      <Cell>
        <Headline2>Sessions</Headline2>
      </Cell>
    </Row>
    <Row>
      {speakers.map(speaker => (
        <Cell columns={4} key={speaker.key}>
          <Speaker {...speaker} id={speaker.key} />
        </Cell>
      ))}
    </Row>
  </Grid>
)
