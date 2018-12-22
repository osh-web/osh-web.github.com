import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/2018/',
      component: 'src/containers/2018/Home',
    },
    {
      path: '/about/',
      component: 'src/containers/About',
    },
    {
      path: '/history/',
      component: 'src/containers/History',
    },
 ],
  webpack:
    (config, { defaultLoaders }) => {
      if (defaultLoaders.cssLoader.use) {
        // develop
        defaultLoaders.cssLoader.use[1].options['modules'] = true
      } else {
        // production
        defaultLoaders.cssLoader.loader[2].options['modules'] = true
      }
      config.module.rules = [{
        oneOf: [
          defaultLoaders.jsLoader,
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ]
      }]
      return config
    },
  Html: ({ Html, Head, Body, children }) => {
    const sheet = new ServerStyleSheet()
    const newChildren = sheet.collectStyles(children)
    const styleTags = sheet.getStyleElement()

    return (
      <Html lang="ja-jp">
      <Head>
        <meta name="viewport" content="width=devise-width, initial-scale=1" />
        <title>オープンセミナー広島</title>
        <link
          href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
          rel="stylesheet"
        />
        {styleTags}
      </Head>
      <Body>{newChildren}</Body>
      </Html>
    )
  },
  plugins: ["react-static-plugin-emotion"],
}
