import React from 'react'
import { Head } from 'react-static'
import { Link } from 'react-static'

import { BackButton } from '../components'


const p1 = `
オープンセミナーは2003年より中四国地域で開催されている
IT技術者向けの非営利の無料セミナーです。
`
const p2 = `
現在は香川県、岡山県、徳島県、広島県、愛媛県で開催されており、
企画と運営は各地域の技術系ユーザコミュニティのボランティアによって行われています。
`

const Title = ({ children }) => (
  <h1 f={[4, 6]}>
    {children}
  </h1>
)

export default () => (
  <div>
    <Head>
      <title>
        初めての方へ - オープンセミナー広島
      </title>
    </Head>
    <Title>初めての方へ</Title>
    <h2>オープンセミナーとは</h2>
    {p1}
    {p2}
    <h2>オープンセミナー広島について</h2>
    <BackButton Link={Link} to="/">HOME</BackButton>
  </div>
)
