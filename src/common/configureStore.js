import appReducer from './app/reducer'
import createFetch from './createFetch'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import shortid from 'shortid'
import validate from './validate'
import {applyMiddleware, compose, createStore} from 'redux'

const BROWSER_DEVELOPMENT =
  process.env.NODE_ENV !== 'production' &&
  process.env.IS_BROWSER

export default function configureStore({deps, /* engine, */ initialState}) {
  const webAddr = process.env.WEB_ADDR ||
    (initialState.device ? 'http://localhost:8000' : '')

  const injectMiddleware = deps => store => next => action => {
    return next(typeof action === 'function'
      ? action({...deps, store})
      : action
    )
  }

  const middleware = [
    injectMiddleware({
      ...deps,
      fetch: createFetch(webAddr),
      getUid: () => shortid.generate(),
      now: () => Date.now(),
      validate
    }),
    promiseMiddleware(
      {promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    })
  ]

  if (BROWSER_DEVELOPMENT) {
    const logger = createLogger({
      collapsed: true,
      // Convert immutablejs to JSON.
      stateTransformer: state => JSON.parse(JSON.stringify(state))
    })
    // Logger must be the last middleware in chain.
    middleware.push(logger)
  }

  const createReduxStore = (BROWSER_DEVELOPMENT && window.devToolsExtension)
    ? compose(applyMiddleware(...middleware), window.devToolsExtension())
    : applyMiddleware(...middleware)

  const store = createReduxStore(createStore)(appReducer, initialState)

  if (module.hot) {
    module.hot.accept('./app/reducer', () => {
      const nextAppReducer = require('./app/reducer')
      store.replaceReducer(nextAppReducer)
    })
  }

  return store
}
