import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { stack as SlideMenu } from 'react-burger-menu';
import Img from 'gatsby-image';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

import './index.sass';

const styles = {
  icon: {
    margin: '0 5px',
    color: '#629EC9',
  },
  link: {
    fontSize: '2em',
    padding: 20,
    color: 'white',
  },
  image: {
    width: '50vw',
    minWidth: '200px',
    maxWidth: '400px',
  },
  sideLink: {
    color: 'black',
    textDecoration: 'underline',
    padding: 20,
  },
};

const Panel = styled.div`
  display: flex
  flex-direction: column
  justify-content: center
  align-content: center
  align-items: center
  flex: 1
  height: 100vh
  background: ${props => (props.left && '#629EC9') || '#fff'}
`;

const IconContainer = styled.div`
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  padding: 20px
`;

const LinkContainer = styled.div`
  display: flex
  flex-flow: row wrap
  justify-content: center
  align-items: center
  padding: 20px
`;

const MenuContent = ({ closeMenu, imageSizes }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }}
  >
    <Panel left>
      <Link onClick={closeMenu} style={styles.link} id="home" className="menu-item" to="/blog">Blog</Link>
      <Link onClick={closeMenu} style={styles.link} id="about" className="menu-item" to="/about">About Me</Link>
      <Link onClick={closeMenu} style={styles.link} id="contact" className="menu-item" to="/lets-chat">Let&#39;s Chat</Link>
    </Panel>
    <Panel>
      <Img
        sizes={imageSizes}
        title="Menu Image"
        alt="selformative logo"
        style={styles.image}
      />
      <IconContainer>
        <a href="mailto:selformative@gmail.com"><FaEnvelope style={styles.icon} size={30} /></a>
        <a href="https://instagram.com/selformative"><FaInstagram style={styles.icon} size={30} /></a>
        <a href="https://facebook.com/selformative"><FaFacebook style={styles.icon} size={30} /></a>
      </IconContainer>
      <LinkContainer>
        <Link to="/lets-chat" style={styles.sideLink}>Contact</Link>
        <Link to="/privacy-terms" style={styles.sideLink}>Terms / Privacy</Link>
      </LinkContainer>
    </Panel>
  </div>
);

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { closeMenu, menuImage } = this.props;
    return (
      <div>
        <SlideMenu
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          left
          width="100%"
          isOpen={isOpen}
        >
          <MenuContent closeMenu={closeMenu} imageSizes={menuImage.sizes} />
        </SlideMenu>
      </div>
    );
  }
}

export default Menu;
