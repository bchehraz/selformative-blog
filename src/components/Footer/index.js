import React from 'react'
import Media from 'react-media'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  text-align: center
  padding: 0
  background-color: white
  display: flex
  flex-direction: row
  justify-content: center
  font-size: 1em
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  zIndex: 3
`

const Footer = () => (
  <FooterWrapper>
    <footer style={{ flex: 1, maxWidth: '100vw', zIndex: 3 }}>
      <div style={{ padding: 18, display: 'flex', justifyContent: 'center', flexFlow: 'column', }}>
        <Link style={styles.linkStyle} to="/">{`Contact`}</Link>
        <Link style={styles.linkStyle} to="/">{`Terms of Service`}</Link>
        <Link style={styles.linkStyle} to="/">{`Privacy Policy`}</Link>
      </div>
      Selformative &copy; 2018
    </footer>
  </FooterWrapper>
)

const styles = {
  linkStyle: {
    padding: '0',
    margin: '5px 30px'
  }
}

export default Footer
