import {combineReducers} from 'redux'

// Note we are composing all reducers. Web, native, whatever. Of course we can
// pass platform specific reducers in configureStore, but there is no reason to
// do that, until app is really large.
<<<<<<< HEAD
import intl from '../intl/reducer'
import home from '../home/reducer'
=======
import device from '../device/reducer';
import intl from '../intl/reducer';
import home from '../home/reducer';
import ui from '../ui/reducer';
>>>>>>> * Removed unnecessary resources

const appReducer = combineReducers({
  intl,
<<<<<<< HEAD
  home
})
=======
  home,
  ui
});
>>>>>>> * Removed unnecessary resources

export default appReducer
