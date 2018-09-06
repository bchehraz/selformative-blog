import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'
import Link from 'gatsby-link';

import Header from '../components/Header'
import './index.sass'
// import './index.css'
// import '../styles/layout-override.css'

import Typography from 'typography'
import deyoungTheme from 'typography-theme-de-young'


const typography = new Typography(deyoungTheme)

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header headerImage={data.headerImage} />
    <div>
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>
                  {children()}
              </div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
            <div style={{ flex: 2.5, paddingRight: "30px" }}>
              {children()}
              </div>
            </div>
          )
        }
      </Media>
    </div>
    <div style={{
      textAlign: 'center',
      padding: '18px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <footer style={{ flex: 1, maxWidth: 980 }}>
        <div style={{ padding: '18px',  borderTop: '1px solid black' }}>
          <Link style={{ padding: '5px' }} to="/">{`Contact`}</Link>
          <Link style={{ padding: '5px' }} to="/">{`Terms of Service`}</Link>
          <Link style={{ padding: '5px' }} to="/">{`Privacy Policy`}</Link><br />
        </div>
        Selformative &copy; 2018

      </footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default Layout

export const query = graphql`
  query SiteDataQuery {
    site {
      siteMetadata {
        title
      }
    }

    # query header image
    headerImage: imageSharp(id: { regex: "/logo_3_2/" }) {
      sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
      }
    }
  }
`
