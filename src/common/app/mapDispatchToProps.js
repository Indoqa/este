import * as homeActions from '../home/actions'
import {Map} from 'immutable'
import {bindActionCreators} from 'redux'

const actions = [
  homeActions
]

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  }
}
