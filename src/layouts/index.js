import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'
import Link from 'gatsby-link';

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
// import '../styles/layout-override.css'

import Typography from 'typography'
import deyoungTheme from 'typography-theme-de-young'
//import parnassusTheme from 'typography-theme-parnassus'


const typography = new Typography(deyoungTheme)

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

const Layout = ({ children, data }) => (
  <div  style={{ background: '#efefef' }}>
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
                maxWidth: "100vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                marginTop: "1rem",
                marginBottom: "1rem",
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
                maxWidth: "100vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
            <div style={{ flex: 1 }}>
              {children()}
              </div>
            </div>
          )
        }
      </Media>
    </div>
    <Footer />
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
