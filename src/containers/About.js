import h from 'react-hyperscript'
import { Link } from 'react-static'
import styled from 'styled-components'

import { color } from '../resources'
import { BackButton } from '../components'

const { primary } = color

const p1 = `
オープンセミナーは2003年より中四国地域で開催されている
IT技術者向けの非営利の無料セミナーです。
`
const p2 = `
現在は香川県、岡山県、徳島県、広島県、愛媛県で開催されており、
企画と運営は各地域の技術系ユーザコミュニティのボランティアによって行われています。
`

const Description = () => (
  h('div', [
    h('p', { px: 15, pt: 20, f: [2, 3] }, [
      p1,
    ]),
    h('p', { px: 15, py: 5, f: [2, 3] }, [
      p2,
    ]),
  ])
)

const Title = ({ title }) => (
  h('h1', {
    f: [4, 6],
  }, [
    title,
  ])
)

export default () => (
  h('div', [
    p1,p2,
    h(BackButton, { Link, to: '/' }, []),
  ])
)
