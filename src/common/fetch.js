import isomorphicFetch from 'isomorphic-fetch'
import URI from 'urijs'

const config = require('./config')
const local = config.serverProtocol + '://' + config.serverHost + ':' + config.serverPort + '/'

function ensureAbsoluteUrl(input) {
  if (typeof input !== 'string') return input
  if (URI(input).is('absolute')) return input
  return URI(local + input).normalize().toString()
}

// Wrapper over isomorphicFetch making relative urls absolute. We don't want
// hardcode fetch urls since they are different when app is deployed or not.
export default function fetch(input, init) {
  input = ensureAbsoluteUrl(input)
  return isomorphicFetch(input, init)
}
