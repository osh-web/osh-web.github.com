import h from 'react-hyperscript'
import { Box } from 'rebass'

import { primary } from '../color'

const name = '© オープンセミナー広島'

export default () => (
  h(Box, {
    bg: primary,
    color: '#eee',
    py: ['1%', '1%'],
    pl: [10, 20],
  }, [
    h('a', {
      href: '/',
      style: { color: 'white' },
    }, [
      name,
    ])
  ])
)
