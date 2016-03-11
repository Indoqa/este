import {combineReducers} from 'redux'

import intl from '../intl/reducer'
import home from '../home/reducer'

const appReducer = combineReducers({
  intl,
  home
})

export default appReducer
