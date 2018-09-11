import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <nav style={styles.navStyle}>
        <div
          className="navItem"
          onClick={this.handleClick}
        >
          <h2><Link style={styles.linkStyle} to="/about" activeStyle={styles.activeLink}>{`ABOUT ME`}</Link></h2>
        </div>
        <div
          className="navItem"
          style={styles.navItem}
          onClick={this.handleClick}
        >
          <h2><Link style={styles.linkStyle} to="/blog" activeStyle={styles.activeLink}>{`BLOG`}</Link></h2>
        </div>
        <div
          className="navItem"
          style={styles.navItem}
          onClick={this.handleClick}
        >
          <h2><Link style={styles.linkStyle} to="/chat" activeStyle={styles.activeLink}>{`LET'S CHAT`}</Link></h2>
        </div>
      </nav>
    );
  }

}

const styles = {
  navStyle: {
    display: 'flex',
    flex: 1,
    margin: 'auto',
    color: 'black',
    padding: 0,
  },
  linkStyle: {
    color: '#aaa',
    textDecoration: 'none',
  },
  activeLink: {
    color: '#4286f4',
    borderBottom: '1px solid black',
  }
}

export default Navigation;
