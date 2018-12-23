// @flow strict
import React from 'react'
import { Flex, Half } from 'grid-styled'
import { Head } from 'react-static'
import { Link } from '@reach/router'
import Button from '@material/react-button';
import { primary, accent} from '../resources/color'

const ListButtonStyle = {
    display: 'block',
    padding: '18px',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    fontWeight: 200,
}

const ListButton = ({ to, className, children }) => (
  <Link to={to} className={className} style={ListButtonStyle}>
      <Button>
      {children}
      </Button>
  </Link>
)

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

const MainButton = () => (
    <Button href="https://osh.connpass.com/event/101380/"
            raised={true}
            style={{
                padding: "20px 40px",
                margin: "20px 10px",
            }}>
        参加申し込みする
    </Button>
)

const Menu = () => (
  <Flex wrap>
    {menuList.map(({ to, text }) => (
      <Half>
        <ListButton to={to}>{text}</ListButton>
      </Half>
    ))}
  </Flex>
)

export default () => (
  <div>
    <Head>
      <title>オープンセミナー2019@広島</title>
    </Head>
    <h1 style={{
        margin: 0,
        backgroundColor: '#994a29',
        color: '#fff',
        fontSize: '22px',
        padding: '20% 0',
        textAlign: 'center'
    }}>
        オープンセミナー2019@広島<br />2019年2月23日開催決定<br/>
        <MainButton/>
    </h1>
    <Menu />
  </div>
)
