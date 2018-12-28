// @flow strict
import React from 'react'
import Card from '@material/react-card'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import { navigate } from '@reach/router'

import { seminarList } from '../resources'
import { AppBar } from '../organisms/AppBar'

const Seminar = ({ name, theme, url }) => (
  <Card
    outlined={true}
    style={{ margin: 4, padding: 16 }}
    onClick={() => navigate(url)}
  >
    <h1 style={{ fontSize: 18, margin: 2, padding: 0 }}>{name}</h1>
    <p style={{ padding: 0, margin: 0 }}>{theme}</p>
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
