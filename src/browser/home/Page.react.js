import './Page.styl';

import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import fetch from '../components/fetch';
import {updateTime} from '../../common/home/actions';

// @fetch(updateTime)
export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    actions: PropTypes.object,
    home: PropTypes.object,
    msg: PropTypes.object
  };

  componentDidMount() {
    const {dispatch} = this.props;
      dispatch(updateTime)
  }

  render() {
    const {msg: {home: msg}, home, actions} = this.props;
    return (
      <div className="home-page">
        <Helmet title={msg.title} />
        <p>
          <span> Click button to fetch time from server. Every 10th call results in an error </span>
        </p>
        <p>
          <button onClick={() => actions.updateTime()}>Update Time</button>
        </p>
        <p>
          <span>Time: {home.time}</span>
        </p>
        <hr/>
        <p>
          {/* Note require usage for image source. Very useful for CDN. */}
          <img alt="50x50 placeholder" src={require('./50x50.png')} />
          (test image from assets)
        </p>
        <hr/>
        <p className='styled'>
          a styled text
        </p>
      </div>
    );
  }

}
