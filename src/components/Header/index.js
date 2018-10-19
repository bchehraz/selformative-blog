import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import './index.sass';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { visible: false };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { visible } = this.state;
    this.setState({
      visible,
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  render() {
    const { headerImage } = this.props;

    return (
      <div className="header-container">
        <div style={{ flex: 1 }}>
          <Link to="/">
            <Img
              className="HeaderLogo"
              title="Header Image"
              alt="selformative logo"
              sizes={headerImage.sizes}
            />
          </Link>
        </div>
        <div className="filler" />
      </div>
    );
  }
}

export default Header;
