// @flow
import React from 'react'
import styled from 'styled-components'
import { Flex, Half } from 'grid-styled'
import { Link, Head } from 'react-static'

import { Hero, H1, H2 } from '../components/2018'
import EventAbstract from '../containers/EventAbstract'
import SponsorBannars from '../containers/SponsorBannars'

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
  {
    to: '/about',
    text: '初めての方へ',
  },
  /*
  {
    to: '/2018/sessions',
    text: 'セッション',
  },
  {
    to: '/2018/staff',
    text: 'スタッフ',
  },
  */
  {
    to: '/history',
    text: 'これまでのオープンセミナー',
  },
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
            希望の方は<a href="https://docs.google.com/forms/d/e/1FAIpQLSeu7K22CflKVv3q8rbjoBIyIQWuUpL1MBmCBxpkoU4vM0_kvg/viewform">こちら</a>から応募してください。
          </p>
        </Half>
      </Flex>
    </div>
    <EventAbstract />
    <SponsorBannars />
  </div>
)
