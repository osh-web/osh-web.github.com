// @flow strict
import React from 'react'
import Button from '@material/react-button'
import { Headline1 } from '@material/react-typography'

export const Hero = () => (
  <Headline1 style={headerStyle} tag="h1">
    <img style={{ height: '300px' }} src="/img/logo.png" alt="OSHロゴ" />
    <br />
    オープンセミナー2025@広島
    <br />
    「君はどこで動かすか？」
    <br />
    2025年08月23日(土) 10:00 ～
    <br />
    <Button
      style={{ color: '#7b5544' }}
      href="https://maps.app.goo.gl/Km3eDEZZ37obMuZt7"
    >
      広島市中区民文化センター(JMSアステールプラザ)
    </Button>
    <br />
    <MainButton />
    <div style={{ marginTop: '24px' }}>
      <span style={{ fontSize: '18px', color: '#7b5544' }}>
        オープンセミナー広島では企業/個人スポンサーを公募中です！
        <br />
        内容は
        <a
          href="https://docs.google.com/document/d/1jCBsd3RKeLc6ULf_QrOrqrcbNO6wf09VmQoIXOOGbdE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: '10px',
            color: '#d2691e',
            textDecoration: 'underline',
          }}
        >
          {' '}
          こちら{' '}
        </a>
        をご参照ください
      </span>
    </div>
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
    href="https://osh.connpass.com/event/355425/"
    raised
    style={{
      padding: '20px 40px',
      margin: '20px 10px',
    }}
  >
    参加申し込みする
  </Button>
)
