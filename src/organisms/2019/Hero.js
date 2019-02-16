// @flow strict
import React from 'react'
import Button from '@material/react-button'
import { Headline1 } from '@material/react-typography'

export const Hero = () => (
  <Headline1 style={headerStyle} tag="h1">
    オープンセミナー2019@広島
    <br />
    「学びかた Hacks」
    <br />
    2019年2月23日(土) 10:00 (9:30受付開始)
    <br />
    <Button style={{color: 'white'}} href="https://www.google.com/maps?ll=34.394533,132.45547&z=16&t=m&hl=ja&gl=US&mapclient=embed&q=%E3%80%92730-0051+%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%A4%A7%E6%89%8B%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%93">
      サテライトキャンパスひろしま 501,502講義室
    </Button>
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
