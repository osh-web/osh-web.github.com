// @flow strict
import React from 'react'
import Card, { CardActions } from '@material/react-card'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import { Headline1, Headline2, Caption } from '@material/react-typography'
import { color } from '../../resources'

const SNS = ({ uri, service }) => (
  <a href={uri} target="_blank">
    <i
      className={`fab fa-${service}`}
      style={{ margin: '0 0 0 6px', color: color.primary }}
    />
  </a>
)

const Twitter = ({ id }) =>
  SNS({ service: 'twitter', uri: `https://twitter.com/${id}` })

const GitHub = ({ id }) =>
  SNS({ service: 'github', uri: `https://github.com/${id}` })

const Facebook = ({ id }) =>
  SNS({ service: 'facebook', uri: `https://www.facebook.com/${id}` })

const Member = ({ name, title, twitter, github, facebook }) => (
  <Card>
    <div style={{ padding: '0 16px' }}>
      <Headline1 style={{ fontSize: 18, lineHeight: 1 }}>
        {title ? (
          <Caption>
            {title}
            <br />
          </Caption>
        ) : (
          ''
        )}
        {name}
        {twitter ? <Twitter id={twitter} /> : ''}
        {github ? <GitHub id={github} /> : ''}
        {facebook ? <Facebook id={facebook} /> : ''}
      </Headline1>
    </div>
  </Card>
)

export const Staff = ({ staff }) => (
  <Grid>
    <Row>
      <Cell>
        <Headline2>Staff</Headline2>
      </Cell>
    </Row>
    <Row>
      {staff.map(member => (
        <Cell columns={4} key={member.key}>
          <Member {...member} id={member.key} />
        </Cell>
      ))}
    </Row>
  </Grid>
)
