import h from 'react-hyperscript'
import { Box } from 'grid-styled'
import styled from 'styled-components'

const name = '© オープンセミナー広島'

const BottomBar = Box.extend`
  width: 100%;

  background-color: white;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
`

export default ({ Link }) => (
  h(BottomBar, {
    py: 12,
    pl: [10, 20],
  }, [
    h(Link, {
      to: '/',
    }, [
      name,
    ]),
  ])
)
