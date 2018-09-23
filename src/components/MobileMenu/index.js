import React from 'react'
import Link from 'gatsby-link'
import { bubble as Menu } from 'react-burger-menu'

import './index.sass';

//TODO: Refactor unnecessary closeMenu code since it seems to work without it

class MobileMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      pinned: false
    }

    this.closeMenu = this.closeMenu.bind(this)
    this.setPin = this.setPin.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setPin(props.pinned)
  }

  closeMenu() {
    this.setState({
      isOpen: false
    })
  }

  setPin(status) {
    if (status !== this.state.pinned) {
      this.setState({
        pinned: status
      })
    }
  }

  render() {
    return (
      <div className={(this.state.pinned) ? "pinned" : "unpinned"}>
        <Menu
          isOpen={this.state.isOpen}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          left
        >
          <Link onClick={this.closeMenu} id="home" className="menu-item" to="/blog">Blog</Link>
          <Link id="about" className="menu-item"  to="/about">About</Link>
          <Link id="contact" className="menu-item" to="/contact">Contact</Link>
        </Menu>
      </div>
    )
  }
}

export default MobileMenu
