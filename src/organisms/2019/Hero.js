// @flow strict
import React from 'react'
import Button from '@material/react-button'
import { Headline1 } from '@material/react-typography'

export const Hero = () => (
  <Headline1 style={headerStyle} tag="h1">
    オープンセミナー2019@広島
    <br />
    2019年2月23日開催決定
    <br />
    <MainButton />
  </Headline1>
)

const headerStyle = {
  margin: 0,
  backgroundColor: '#994a29',
  color: '#fff',
  fontSize: '22px',
  padding: '20% 0',
  lineHeight: 1.8,
  textAlign: 'center',
}

const MainButton = () => (
  <Button
    href="https://osh.connpass.com/event/101380/"
    raised
    style={{
      padding: '20px 40px',
      margin: '20px 10px',
    }}
  >
    参加申し込みする
  </Button>
)
