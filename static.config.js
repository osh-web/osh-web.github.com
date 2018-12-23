import React from 'react'

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
