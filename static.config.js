import React from 'react'
import { ServerStyleSheet } from 'styled-components'


export default {
  getRoutes: async () => [
    {
      path: '/',
    },
    {
      path: '/about/',
    },
    {
      path: '/2017/',
    },
  ],
  Html: ({ Html, Head, Body, children }) => {
    const sheet = new ServerStyleSheet()
    const newChildren = sheet.collectStyles(children)
    const styleTags = sheet.getStyleElement()

    return (
      <Html lang="ja-jp">
        <Head>
          <meta name="viewport" content="width=devise-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet" />
          {styleTags}
        </Head>
        <Body>{newChildren}</Body>
      </Html>
    )
  },
}
