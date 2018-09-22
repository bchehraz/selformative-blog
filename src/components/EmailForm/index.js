import React from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Img from 'gatsby-image'

import './index.sass'

class EmailForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="email-form-container">
        <Img
          sizes={this.props.img.sizes}
          style={{
            position: 'absolute',
            left: '74vw',
            top: '500px',
            height: '350px',
            width: '25vw',
          }}
        />
        <form className="email-form">

          <label>{`Email Address`}</label>
          <input type="email"/>
        </form>
      </div>
    )
  }
}

export default EmailForm
