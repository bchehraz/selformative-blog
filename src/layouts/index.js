import React from 'react';
import Helmet from 'react-helmet';
import Headroom from 'react-headroom';

import Typography from 'typography';
import deyoungTheme from 'typography-theme-de-young';
// import parnassusTheme from 'typography-theme-parnassus'

import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import './index.sass';
// import '../styles/layout-override.css'

const typography = new Typography(deyoungTheme);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: {
        pinned: true,
      },
    };
    this.onPin = this.onPin.bind(this);
    this.onUnpin = this.onUnpin.bind(this);
  }

  onPin() {
    this.setState({ header: { pinned: true } });
  }

  onUnpin() {
    this.setState({ header: { pinned: false } });
  }

  render() {
    const { children, data } = this.props;
    const { header } = this.state;
    return (
      <div style={{ background: '#efefef' }} id="outer-container">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <MobileMenu pinned={header.pinned} />
        <div id="page-wrap" style={{ position: 'relative' }}>
          <Headroom
            pinStart={50}
            onPin={this.onPin}
            onUnpin={this.onUnpin}
          >
            <Header headerImage={data.headerImage} />
          </Headroom>
          <div className="layout-container">
            <div style={{ flex: 1 }}>
              {children()}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;

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
`;
