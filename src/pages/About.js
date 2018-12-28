import React from 'react'
import { Head } from 'react-static'
import { Cell, Grid, Row } from '@material/react-layout-grid'
import { Headline3, Body1 } from '@material/react-typography'

import { AppBar } from '../organisms/AppBar'

const p1 = `
オープンセミナーは2003年より中四国地域で開催されている
IT技術者向けの非営利の無料セミナーです。
`
const p2 = `
現在は香川県、岡山県、徳島県、広島県、愛媛県で開催されており、
企画と運営は各地域の技術系ユーザコミュニティのボランティアによって行われています。
`

export default () => (
  <div>
    <Head>
      <title>初めての方へ - オープンセミナー広島</title>
    </Head>
    <AppBar title="初めての方へ">
      <Grid>
        <Row>
          <Cell columns={6}>
            <Headline3 tag="h1">オープンセミナーとは</Headline3>
            <Body1>
              {p1}
              {p2}
            </Body1>
          </Cell>
          <Cell columns={6}>
            <Headline3 tag="h1">オープンセミナー広島について</Headline3>
            <Body1>
              <p>
                広島では毎年2月ごろにオープンセミナーを開催をしています。
                実行委員長を毎年交代をし、運営のノウハウを引き継ぎ、新たな実行委員会を毎年立ち上げています。
                実行委員会では、ITコミュニティに積極的に参加シている人や、コミュニティを立ち上げている人たちが主となっています。
                そのため、コミュニティの年に一度のお祭りのようなものとなっています。
              </p>
              <p>
                実行委員会では、一緒にイベントを作りあげたい仲間を探しています。
                コミュニティ同士の繋がりの強くしたい方や、コミュニティの主催者と仲良くしたい方におすすめです。
                参加ご希望の方は気軽にご連絡ください。
              </p>
            </Body1>
          </Cell>
        </Row>
      </Grid>
    </AppBar>
  </div>
)
