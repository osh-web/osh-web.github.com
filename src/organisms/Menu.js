// @flow strict
import React from 'react'
import { navigate } from '@reach/router'
import Button from '@material/react-button'
import { Cell, Grid, Row } from '@material/react-layout-grid'

export const Menu = () => (
  <Grid>
    <Row>
      {menuList.map(({ to, text, key }) => (
        <Cell columns={4}>
          <ListButton to={to} key={key}>
            {text}
          </ListButton>
        </Cell>
      ))}
    </Row>
  </Grid>
)

const menuList = [
  {
    key: 'about',
    to: '/about/',
    text: '初めての方へ',
  },
  /*
    {
      to: '/2018/sessions',
      text: 'セッション',
    },
    {
      to: '/2018/staff',
      text: 'スタッフ',
    },
    */
  {
    key: 'history',
    to: '/history/',
    text: 'これまでのオープンセミナー',
  },
]

const ListButtonStyle = {
  textAlign: 'center',
}

const ListButton = ({ to, children }) => (
  <Button onClick={() => navigate(to)} style={ListButtonStyle}>
    {children}
  </Button>
)
