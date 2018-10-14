import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

import './index.sass';

const FooterWrapper = styled.footer`
  background-color: white
  display: flex
  flex-flow: row wrap
  justify-content: space-around
  align-items: center
  position: absolute
  bottom: 0
  height: 300px
  flex: 1
  width: 100%;
  zIndex: 0
  padding: 0 20px
  border-bottom: solid 40px #fff
`;

const FooterSection = styled.div`
  display: flex
  justify-content: center
  flex-direction: ${props => props.row || 'column'}
  text-align: center
`;

const LogoContainer = styled.div`
  width: 100%
  padding: 1em
`;

const styles = {
  icon: {
    margin: '0 5px',
  },
};

const Footer = ({ footerImage }) => (
  <FooterWrapper className="footer-wrapper">
    <LogoContainer>
      <Img
        sizes={footerImage.sizes}
        className="footerImage"
        title="Footer Image"
        alt="selformative logo"
      />
    </LogoContainer>
    <FooterSection>
      <Link to="/">Contact</Link>
      <Link to="/">Terms of Service</Link>
      <Link to="/">Privacy Policy</Link>
    </FooterSection>
    <FooterSection row>
      <a href="mailto:selformative@gmail.com"><FaEnvelope style={styles.icon} size={30} /></a>
      <a href="https://instagram.com/selformative"><FaInstagram style={styles.icon} size={30} /></a>
      <a href="https://facebook.com/selformative"><FaFacebook style={styles.icon} size={30} /></a>
    </FooterSection>
    <FooterSection>
      <span>&copy; 2018</span>
      <Link to="/privacy-terms">Privacy / Terms</Link>
      <a target="_blank" rel="noopener noreferrer" href="http://www.babakchehraz.com">Web Design Agency</a>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;
