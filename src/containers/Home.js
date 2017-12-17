// @flow
import React from 'react'
import styled from 'styled-components'
import { Flex, Half } from 'grid-styled'
import { Link, Head } from 'react-static'

import { Hero } from '../components/2018'
import { color } from '../resources'

const { accent } = color

const ListButtonInner = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)

const ListButton = styled(ListButtonInner)`
  display: block;
  padding: 18px;
  text-decoration: none;
  color: black;
  text-align: center;
  font-weight: 200;
`

const menuList = [
  /*
  {
    to: '/about',
    text: '初めての方へ',
  },
  {
    to: '/2018/sessions',
    text: 'セッション',
  },
  {
    to: '/2018/staff',
    text: 'スタッフ',
  },
  {
    to: '/history',
    text: 'これまでのオープンセミナー',
  },
  */
]

const Menu = () => (
  <Flex wrap>
    {menuList.map(({ to, text }) => (
      <Half>
        <ListButton to={to}>
          {text}
        </ListButton>
      </Half>
    ))}
  </Flex>
)

const eventInfo = [
  {
    title: 'イベント名',
    value: 'オープンセミナー広島',
  },
  {
    title: '開催日時',
    value: '2018年2月24日(土)',
  },
  {
    title: 'テーマ',
    value: 'いまさらチームビルディング',
  },
  {
    title: '会場',
    value: [<div>広島県広島市中区大手町1-5-3</div>, <div>サテライトキャンパスひろしま 501講義室</div>],
  },
]

const H1 = styled.h1`
  font-size: 30px;
  margin: 20px;

  color: ${accent};
  display: block;
  text-align: center;
  border: solid ${accent} 0px;
  border-bottom-width: 1px;
  font-weight: 100;
`

const H2 = styled.h2`
  font-size: 20px;

  color: ${accent};
  text-align: center;
  font-weight: 100;
`

const AbstractTtile = styled(Half)`
  display: table-cell;
  border: solid 1px #fff;
  border-left-width: 20px;
  border-right-width: 20px;
  box-sizing: border-box;
  background-color: ${accent};
  color: white;
  text-align: center;
  vertical-align: middle;
`

const AbstractValue = styled(Half)`
  border: solid 1px #fff;
  border-left-width: 20px;
  border-right-width: 20px;
  box-sizing: border-box;
  text-align: center;
`

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

export default () => (
  <div>
    <Head>
      <title>オープンセミナー2018@広島</title>
    </Head>
    <Hero />
    <Menu />
    <div>
      <H1>お知らせ</H1>
      <H2>ライトニングトークの公募</H2>
      <Flex justify="center">
        <Half px={10}>
          <p>
            本セミナー内でライトニングトーク大会のライトニングトークを公募しています。
            希望の方は<a href="">こちら</a>からお坊ください。
          </p>
        </Half>
      </Flex>
    </div>
    <EventAbstract />
  </div>
)
