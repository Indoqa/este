import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class RouterHandler extends Component {

  static propTypes = {
    children: PropTypes.object
  };

  render() {
    const {children} = this.props
    if (!children) return null

    const propsWithoutChildren = {...this.props}
    delete propsWithoutChildren.children

    return React.cloneElement(children, propsWithoutChildren)
  }

}
