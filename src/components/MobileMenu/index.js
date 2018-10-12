import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { bubble as Menu } from 'react-burger-menu';

import './index.sass';

// TODO: Refactor unnecessary closeMenu code since it seems to work without it

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      pinned: false,
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.setPin = this.setPin.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setPin(props.pinned);
  }

  setPin(status) {
    const { pinned } = this.state;
    if (status !== pinned) {
      this.setState({
        pinned: status,
      });
    }
  }

  closeMenu() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen, pinned } = this.state;
    return (
      <div className={(pinned) ? 'pinned' : 'unpinned'}>
        <Menu
          isOpen={isOpen}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          left
        >
          <Link onClick={this.closeMenu} id="home" className="menu-item" to="/blog">Blog</Link>
          <Link id="about" className="menu-item" to="/about">About Me</Link>
          <Link id="contact" className="menu-item" to="/lets-chat">Let&#39;s Chat</Link>
        </Menu>
      </div>
    );
  }
}

MobileMenu.defaultProps = {
  pinned: false,
};

MobileMenu.propTypes = {
  pinned: PropTypes.bool,
};

export default MobileMenu;
