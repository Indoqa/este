import './Page.styl';

import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedDate} from 'react-intl';
import {Link} from 'react-router';
import fetch from '../components/fetch'
import {updateTime} from '../../common/home/actions';

//@fetch(updateTime)
export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    actions: PropTypes.object,
    home: PropTypes.object,
    msg: PropTypes.object
  }

  render() {
    const {msg: {home: msg}, home, actions} = this.props;
    return (
      <div className="home-page">
        <Helmet title={msg.title} />
        <p>
          Body
        </p>
        <img alt="50x50 placeholder" src="/assets/img/50x50.png"/>
        <p>
          <span>{home.time}</span>
        </p>
        <a onClick={() => actions.updateTime()}>Update Time</a>
      </div>
    );
  }

}
