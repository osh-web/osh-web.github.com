// @flow strict
import React from 'react'
import Button from '@material/react-button'
import { Headline1 } from '@material/react-typography'

export const Hero = () => (
  <Headline1 style={headerStyle} tag="h1">
    <img style={{ height: '300px' }} src="/img/logo.png"></img>
    <br />
    オープンセミナー2024@広島
    <br />
    「XRE - エンジニアを支える組織」
    <br />
    2024年11月09日(土) 10:00 ～
    <br />
    <Button style={{color: '#7b5544'}} href="https://goo.gl/maps/xxWZx4DDw1EBtomy8">
        広島市中区民文化センター(JMSアステールプラザ)
    </Button>
      <br />
    <MainButton />
  </Headline1>
)

const headerStyle = {
  margin: 0,
  backgroundColor: '#febe98',
  color: '#000000',
  fontSize: '22px',
  padding: '15% 0',
  lineHeight: 1.8,
  textAlign: 'center',
}

const MainButton = () => (
  <Button
    href="https://osh.connpass.com/event/324736/"
    raised
    style={{
      padding: '20px 40px',
      margin: '20px 10px',
    }}
  >
    参加申し込みする
  </Button>
)
