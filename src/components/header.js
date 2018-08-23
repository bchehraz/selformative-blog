import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

//import Menu from '../Menu';
//import MenuButton from '../MenuButton';
//import EmailList from '../EmailList';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { visible: false };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  render() {
    return (
      <div
        style={{
          //background: '#030301',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            padding: '1.45rem 1.0875rem',
            alignItems: 'center',
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row',
            background: 'white',
          }}
        >

          {/*<Nav style={{ flex: 1, textAlign: 'right' }}/> */}
          <div style={{ flex: 1 }}>
            <Img
              className="HeaderLogo"
              title="Header Image"
              alt="selformative logo"
              sizes={this.props.headerImage.sizes}
              style={{
                // display: 'flex',
                // flex: 2,
                maxWidth: 400,
                width: 200,
                margin: 'auto',
              }}
            />
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}

const styles = {
  navStyle: {
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    margin: 'auto',
  }
}

export default Header
