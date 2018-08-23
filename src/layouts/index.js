import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

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
