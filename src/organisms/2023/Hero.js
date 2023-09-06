// @flow strict
import React from 'react'
import Button from '@material/react-button'
import { Headline1 } from '@material/react-typography'

export const Hero = () => (
  <Headline1 style={headerStyle} tag="h1">
    オープンセミナー2023@広島
    <br />
    「生成AIとのつきあい方」
    <br />
    2023年11月11日(土) 10:00 ～ 17:00 （仮）
    <br />
    <Button style={{color: '#7b5544'}} href="https://goo.gl/maps/xxWZx4DDw1EBtomy8">
      広島市西区民文化センター
    </Button>
      <br />
    <MainButton />
  </Headline1>
)

const headerStyle = {
  margin: 0,
  backgroundColor: '#F4EFAC',
  color: '#000000',
  fontSize: '22px',
  padding: '20% 0',
  lineHeight: 1.8,
  textAlign: 'center',
}

const MainButton = () => (
  <Button
    href="https://osh.connpass.com/event/283678/"
    raised
    style={{
      padding: '20px 40px',
      margin: '20px 10px',
    }}
  >
    参加申し込みする
  </Button>
)
