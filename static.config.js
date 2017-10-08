import React, { Component } from 'react'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
      },
      {
        path: '/2017/'
      }
    ]
  },
  Html: ({ Html, Head, Body, children }) => {
    return (
      <Html lang="ja-jp">
        <Head>
          <meta name="viewport" content="width=devise-width, initial-scale=1" />
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
}
