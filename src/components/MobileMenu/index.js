import React from 'react'
import Link from 'gatsby-link'
import { bubble as Menu } from 'react-burger-menu'

import './index.sass';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.closeMenu = this.closeMenu.bind(this)
  }

  closeMenu() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Menu
        isOpen={this.state.isOpen}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        left
      >
        <Link onClick={this.closeMenu} id="home" className="menu-item" to="/">Home</Link>
        <Link id="about" className="menu-item"  to="/about">About</Link>
        <Link id="contact" className="menu-item" to="/contact">Contact</Link>
      </Menu>
    )
  }
}

export default MobileMenu
