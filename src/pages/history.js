// @flow strict
import React from 'react'
import Card from '@material/react-card'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import { Body1, Headline1 } from '@material/react-typography'
import { navigate } from '@reach/router'

import { seminarList } from '../resources'
import { AppBar } from '../organisms/AppBar'

const Seminar = ({ name, theme, url }) => (
  <Card
    className="mdc-elevation--z1"
    outlined={true}
    style={{ margin: 4, padding: 16 }}
    onClick={() => navigate(url)}
  >
    <Headline1 style={{ fontSize: 18, lineHeight: 1 }}>{theme}</Headline1>
    <Body1 style={{ fontSize: 12 }}>{name}</Body1>
  </Card>
)

const SeminerCell = props => (
  <Cell columns={4}>
    <Seminar {...props} />
  </Cell>
)

export default () => (
  <AppBar title="過去のイベント">
    <Grid>
      <Row>{seminarList.map(SeminerCell)}</Row>
    </Grid>
  </AppBar>
)
