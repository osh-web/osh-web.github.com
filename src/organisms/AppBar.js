import React from 'react'
import { navigate } from '@reach/router'
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import MaterialIcon from '@material/react-material-icon'

export function AppBar({ title, children }) {
  return (
    <div>
      <TopAppBar
        title={title}
        navigationIcon={
          <MaterialIcon icon="chevron_left" onClick={() => navigate('/')} />
        }
      />
      <TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
    </div>
  )
}
