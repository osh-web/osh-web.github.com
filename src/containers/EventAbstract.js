// @flow
import React from 'react'
import { Flex, Half } from 'grid-styled'
import styled from 'styled-components'

import sponsors from '../resources/2018/sponsors'
import speakers from '../resources/2018/speakers'
import { accent } from '../resources/color'
import H1 from '../components/2018/H1'
import H2 from '../components/2018/H2'

const Speaker = ({ name, company }) => (
  <li key={name}>
    {name} (<a href={company.uri}>{company.name}</a>)
  </li>
)

const Speakers = (
  <ul style={{ listStyleType: 'none' }}>
    {speakers.map(Speaker)}
  </ul>
)

const Sponsor = ({ name, url }) => (
  <li key={name}>
    <a href={url}>
      {name}
    </a>
  </li>
)

const Sponsors = (
  <ul style={{ listStyleType: 'none' }}>
    {sponsors.map(Sponsor)}
  </ul>
)

const AbstractTtile = styled(Half)`
  display: flex;
  border: solid 1px #fff;
  border-left-width: 20px;
  border-right-width: 20px;
  box-sizing: border-box;
  background-color: ${accent};
  color: white;
  justify-content: center;
  align-items: center;
`

const AbstractValue = styled(Half)`
  border: solid 1px #fff;
  border-left-width: 20px;
  border-right-width: 20px;
  box-sizing: border-box;
  text-align: center;
`

type EventInfo = {
  title: string,
  value: mixed,
}
const eventInfo: EventInfo[] = [
  {
    title: 'イベント名',
    value: 'オープンセミナー2018@広島',
  },
  {
    title: '開催日時',
    value: '2018年2月24日(土) 9:30 - 18:00 ',
  },
  {
    title: 'テーマ',
    value: 'いまさらチームビルディング',
  },
  {
    title: '出演(順不同)(敬称略)',
    value: Speakers,
  },
  {
    title: '会場',
    value: [<div>広島県広島市中区大手町1-5-3</div>, <div>サテライトキャンパスひろしま 501講義室</div>],
  },
  {
    title: '協賛',
    value: Sponsors,
  },
  {
    title: '参加費',
    value: '無料',
  },
  {
    title: '懇親会',
    value: 'Procida プロチダ DINING & PARTY',
  },
  {
    title: '主催',
    value: 'オープンセミナー2018@広島 実行委員会',
  },
  {
    title: 'URL',
    value: 'http://osh-web.github.io',
  },
]

const EventAbstract = () => (
  <div>
    <H1>イベント概要</H1>
    <div>
      <Flex justify="center">
        <Half px={10}>
          <p>
            何らかの目標を達成するために複数人で行動を共にしている方が少なくないはずです。 しかし、本当にその集団はチームになっているのでしょうか。
          </p>
          <p>
            ただ単に何人かの人が集まり作業を行っているだけの状態になってはいませんか。 目的を真に共有し共感しお互いを尊重し言い合える、１+１が３になる様なチームになっているのでしょうか。
          </p>
          <p>
            この機会に本当のチームになるためのチームビルディングに関して再考してみませんか？
          </p>
        </Half>
      </Flex>
      <H2>イベント情報</H2>
      <Flex wrap>
        {eventInfo.map(({ title, value }) => [
          (<AbstractTtile p={1}>{title}</AbstractTtile>),
          (<AbstractValue p={1}>{value}</AbstractValue>),
        ],
        )}
      </Flex>
    </div>
  </div>
)

export default EventAbstract
