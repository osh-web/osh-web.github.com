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

const Speaker = ({ name, furi, description, id, title, memberships, session }) => (
  <Card className="mdc-elevation--z1" outlined>
    <CardMedia imageUrl={`/img/2024/${id}.jpg`} square />
    <div style={{ padding: '0 16px' }}>
      <Headline1 style={{ fontSize: 18, lineHeight: 1 }}>
        {session ?
          '『' + (session.name) + '』' : 'セッション内容 TBD'
        }
      </Headline1>
      <Body2 style={{ whiteSpace: 'pre-line' }}>{session ?
              (session.description) : ''
             }</Body2>
      <Caption style={{ fontSize: 14, margin: 0, padding: 0 }}>{furi}</Caption>
      <Headline1 style={{ fontSize: 18, lineHeight: 1, margin: 0 }}>
        {name}
      </Headline1>
      <div style={{ fontSize: 16, lineHeight: 1, margin: 0, padding: '8px 0' }}>
        {memberships.map(({ uri, name }) => (
          <Button href={uri} style={{ height: 32, padding: '2px 0' }}>
            {name}
          </Button>
        ))}
      </div>
      <Body2 style={{ whiteSpace: 'pre-line' }}>{description}</Body2>
      <Body2>
        {title.reduce(
          (acc, elem) => (
            <span>
              {acc}
              <br />
              {elem}
            </span>
          ),
          [],
        )}
      </Body2>
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
      {speakers.length ?
        speakers.map(speaker => (
          <Cell columns={4} key={speaker.key}>
            <Speaker {...speaker} id={speaker.key} />
          </Cell>
        )) : <Cell>
              現在調整中です
          </Cell>
      }
    </Row>
  </Grid>
)
