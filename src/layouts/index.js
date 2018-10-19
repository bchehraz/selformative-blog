import React from 'react';
import Helmet from 'react-helmet';

import Typography from 'typography';
import deyoungTheme from 'typography-theme-de-young';
// import parnassusTheme from 'typography-theme-parnassus'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import './reset.css';
import './index.sass';
// import '../styles/layout-override.css'

const typography = new Typography(deyoungTheme);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

const Layout = ({ children, data }) => (
  <div style={{ background: '#efefef' }} id="outer-container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Menu menuImage={data.logo} />
    <div id="page-wrap" style={{ position: 'relative' }}>
      <Header headerImage={data.logo} />
      <div className="layout-container">
        <div style={{ flex: 1 }}>
          {children()}
        </div>
      </div>
      <Footer footerImage={data.logo} />
    </div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteDataQuery {
    site {
      siteMetadata {
        title
      }
    }

    # query header image
    logo: imageSharp(id: { regex: "/logo_3_2/" }) {
      sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
      }
    }
  }
`;
