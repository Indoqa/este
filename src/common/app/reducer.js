import {combineReducers} from 'redux'

// Note we are composing all reducers. Web, native, whatever. Of course we can
// pass platform specific reducers in configureStore, but there is no reason to
// do that, until app is really large.
import intl from '../intl/reducer'
import home from '../home/reducer'

const appReducer = combineReducers({
  intl,
  home
})

export default appReducer
