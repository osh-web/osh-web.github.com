// @flow
import { combineReducers } from 'redux'

import window from './windowReducer'
import speakerDialog from './speakerDialogReducer'

export default combineReducers({ window, speakerDialog })
