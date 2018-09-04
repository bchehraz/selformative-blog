import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clicked: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      clicked: true
    })
    e.target.style.color = 'blue';
  }

  render() {
    return (
      <nav style={styles.navStyle}>
      <div
        className="navItem"
        style={(this.state.clicked)? {...styles.navItem, color: 'black'} : styles.navItem }
        onClick={this.handleClick}
      >
          <Link style={(this.state.clicked)? {...styles.linkStyle, color: 'black'} : styles.linkStyle } to="#/about">{`ABOUT`}</Link>
        </div>
        <div
          className="navItem"
          style={(this.state.clicked)? {...styles.navItem, color: 'black'} : styles.navItem }
          onClick={this.handleClick}
        >
          <Link style={(this.state.clicked)? {...styles.linkStyle, color: 'black'} : styles.linkStyle } to="#/blog">{`BLOG`}</Link>
        </div>
        <div
          className="navItem"
          style={(this.state.clicked)? {...styles.navItem, color: 'black'} : styles.navItem }
          onClick={this.handleClick}
        >
          <Link style={(this.state.clicked)? {...styles.linkStyle, color: 'black'} : styles.linkStyle } to="#/chat">{`LET'S CHAT`}</Link>
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
  },
  linkStyle: {
    color: 'inherit',
    textDecoration: 'none',
  },
  navItem: {
    padding: 20,
    fontSize: '1em',
  }
}

export default Navigation;
