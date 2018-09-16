import React from 'react'
import Media from 'react-media'
import Link from 'gatsby-link'

const Footer = () => (
  <Media query={{ maxWidth: 480 }}>
    {matches =>
      matches ? (
        <div style={{
          textAlign: 'center',
          padding: '18px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: '1em'
        }}>
          <footer style={{ flex: 1, maxWidth: 980 }}>
            <div style={{ padding: 18, display: 'flex', justifyContent: 'center', flexFlow: 'column', }}>
              <Link style={styles.linkStyle} to="/">{`Contact`}</Link>
              <Link style={styles.linkStyle} to="/">{`Terms of Service`}</Link>
              <Link style={styles.linkStyle} to="/">{`Privacy Policy`}</Link>
            </div>
            Selformative &copy; 2018

          </footer>
        </div>
      ) :
      (
      <div style={{
        textAlign: 'center',
        padding: '18px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '1em'
      }}>
        <footer style={{ flex: 1, maxWidth: 980 }}>
          <div style={{ padding: 18, display: 'flex', justifyContent: 'center', flexFlow: 'row', }}>
            <Link style={styles.linkStyle} to="/">{`Contact`}</Link>
            <Link style={styles.linkStyle} to="/">{`Terms of Service`}</Link>
            <Link style={styles.linkStyle} to="/">{`Privacy Policy`}</Link>
          </div>
          {`Selformative`} &copy; {`2018`}

        </footer>
      </div>
    )
    }
  </Media>
)

const styles = {
  linkStyle: {
    padding: '0',
    margin: '5px 30px'
  }
}

export default Footer
