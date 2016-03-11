import Bluebird from 'bluebird'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import configureStore from '../common/configureStore'
import createEngine from 'redux-storage/engines/localStorage'
import createRoutes from './createRoutes'
import {IntlProvider} from 'react-intl'
import {Provider} from 'react-redux'
import {browserHistory} from 'react-router'

window.Promise = Bluebird
if (process.env.IS_BROWSER) require('regenerator/runtime')

const app = document.getElementById('app')
const engine = createEngine('este-app')
const initialState = window.__INITIAL_STATE__
const store = configureStore({engine, initialState})
const routes = createRoutes(store.getState)

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>,
  app
)
