import './Page.styl'

import Component from 'react-pure-render/component'
import Helmet from 'react-helmet'
import React, {PropTypes} from 'react'

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object,
    home: PropTypes.object,
    msg: PropTypes.object
  };

  componentDidMount() {
    this.props.actions.updateTime()
  }

  render() {
    const {msg: {home: msg}, home, actions} = this.props
    return (
      <div className="home-page">
        <Helmet title={msg.title} />
        <p>
          <span> Click button to fetch time from server. Every 10th call results in an error </span>
        </p>
        <p>
          <button onClick={actions.updateTime}>Update Time</button>
        </p>
        <p>
          <span>Time: {home.time}</span>
        </p>
        <hr/>
        <p>
          <img alt="50x50 placeholder" src={require('./50x50.png')} />
          (test image from assets)
        </p>
        <hr/>
        <p className={'styled'}>
          a styled text
        </p>
      </div>
    )
  }

}
