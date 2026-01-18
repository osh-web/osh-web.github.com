// @flow strict
import React from 'react'
import Button from '@material/react-button'
import { Headline1 } from '@material/react-typography'

export const Hero = () => (
  <Headline1 style={headerStyle} tag="h1">
    <img style={{ height: '300px' }} src="/img/logo.png" alt="OSHロゴ" />
    <br />
    オープンセミナー2026@広島
    <br />
    「事業を進めるコーポレートIT」
    <br />
    2026年03月21日(土) 10:00 ～
    <br />
    <Button
      style={{ color: '#7b5544' }}
      href="https://www.google.com/maps?ll=34.394533,132.45547&z=16&t=m&hl=ja&gl=US&mapclient=embed&q=%E3%80%92730-0051+%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%A4%A7%E6%89%8B%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%93"
    >
      サテライトキャンパスひろしま
    </Button>
    <br />
    <MainButton />
    <div style={{ marginTop: '24px' }}>
      <span style={{ fontSize: '18px', color: '#7b5544' }}>
        オープンセミナー広島では企業/個人スポンサーを公募中です！
        <br />
        内容は
        <a
          href="https://docs.google.com/document/d/1HSrpb3fb3Jj4XdwogMfpVTepT86X3tNwYn2dB8IMhHM/edit?usp=sharing"
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
    href="https://osh.connpass.com/event/376704/"
    raised
    style={{
      padding: '20px 40px',
      margin: '20px 10px',
    }}
  >
    参加申し込みする
  </Button>
)
