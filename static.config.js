import React from 'react'
// import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'https://osh-web.github.io/',
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/pages/Home',
    },
    {
      path: '/2018/',
      component: 'src/pages/2018/Home',
    },
    {
      path: '/about/',
      component: 'src/pages/About',
    },
    {
      path: '/history/',
      component: 'src/pages/History',
    },
 ],
 /*
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
    */
    /*
  Html: ({ Html, Head, Body, children }) => {
    const sheet = new ServerStyleSheet()
    const newChildren = sheet.collectStyles(children)
    const styleTags = sheet.getStyleElement()

    return (
    )
  },
  */
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="ja-JP">
      <Head>
        <meta name="viewport" content="width=devise-width, initial-scale=1" />
        <title>オープンセミナー広島</title>
        <link
          href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: ["react-static-plugin-sass"],
}
