import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class Footer extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    return (
      <footer>
        <p>
          Footer
        </p>
      </footer>
    )
  }
}
