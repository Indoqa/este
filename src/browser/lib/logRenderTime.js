import Component from 'react-pure-render/component'
import React from 'react'

export default function logRenderTime(BaseComponent) {

  return class LogRenderTime extends Component {

    componentWillUpdate() {
      this.start = Date.now()
    }

    componentDidUpdate() {
      const total = Date.now() - this.start
      console.log(`render time: ${total}ms`) // eslint-disable-line no-console, no-undef
    }

    render() {
      return <BaseComponent {...this.props} />
    }

  }
}
