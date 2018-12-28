import React from 'react'
import { Button } from '@material/react-button'
import { navigate } from '@reach/router'

const name = '© オープンセミナー広島'

export default () => (
  <Button style={{ color: 'black' }} onClick={() => navigate('/')}>
    {name}
  </Button>
)
