import React from 'react';
import Link from 'gatsby-link';
import './index.sass';

const styles = {
  linkStyle: {
    color: '#aaa',
    textDecoration: 'none',
  },
  activeLink: {
    color: '#4286f4',
    borderBottom: '1px solid black',
  },
};

const Navigation = () => (
  <nav className="nav-container">
    <div className="navItem">
      <h2><Link style={styles.linkStyle} to="/about" activeStyle={styles.activeLink}>ABOUT ME</Link></h2>
    </div>
    <div className="navItem">
      <h2><Link style={styles.linkStyle} to="/blog" activeStyle={styles.activeLink}>BLOG</Link></h2>
    </div>
    <div className="navItem">
      <h2><Link style={styles.linkStyle} to="/lets-chat" activeStyle={styles.activeLink}>LET&#39;S CHAT</Link></h2>
    </div>
  </nav>
);

export default Navigation;
