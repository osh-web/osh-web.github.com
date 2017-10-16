import React from 'react'
import { injectGlobal } from 'styled-components'


injectGlobal`
body {
  margin: 0;
  padding: 0;
}
`


export default {
  getRoutes: async () => [
    {
      path: '/',
    },
    {
      path: '/2017/',
    },
  ],
  Html: ({ Html, Head, Body, children }) => (
    <Html lang="ja-jp">
      <Head>
        <meta name="viewport" content="width=devise-width, initial-scale=1" />
      </Head>
      <Body className="hge">{children}</Body>
    </Html>
  ),
}
