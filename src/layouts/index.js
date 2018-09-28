import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import './index.sass'
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

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      header: {
        pinned: true
      }
    }
    this.onPin = this.onPin.bind(this)
    this.onUnpin = this.onUnpin.bind(this)
  }

  onPin() {
    this.setState({ header: { pinned: true }})
  }

  onUnpin() { //header pin
    this.setState({ header: { pinned: false }})
  }

  render () {
    const { children, data } = this.props;
    return (
      <div  style={{ background: '#efefef' }} id="outer-container">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <MobileMenu pinned={this.state.header.pinned} />
        <div id="page-wrap" style={{ position: 'relative', }}>
          <Headroom
            pinStart={50}
            onPin={this.onPin}
            onUnpin={this.onUnpin}
          >
            <Header headerImage={data.headerImage} />
          </Headroom>
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
                      marginTop: "0",
                      zIndex: 1,
                      paddingBottom: '200px',
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
                      marginTop: "0",
                      paddingBottom: '200px',
                      zIndex: 1,
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
        </div>{/* id: page-wrap*/}
      </div>
    )
  }
}

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
