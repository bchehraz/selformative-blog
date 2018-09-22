import React from 'react';
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/';

import './index.sass';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { visible: false };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  render() {
    return (
      <div className="header-container">
        <div style={{ flex: 1 }}>
          <Link to="/">
            <Img
              className="HeaderLogo"
              title="Header Image"
              alt="selformative logo"
              sizes={this.props.headerImage.sizes}
            />
          </Link>
        </div>
        <div className="filler"/>
        <Navigation />
      </div>
    );
  }
}

Header.propTypes = {
  headerImage: PropTypes.object,
  sizes: PropTypes.object
}

export default Header
