import React from 'react';
import Img from 'gatsby-image';

import './index.sass';

const inputId = '123';

const EmailForm = ({ img }) => (
  <div className="email-form-container">
    <Img
      sizes={img.sizes}
      style={{
        height: '300px',
        minWidth: '200px',
        width: '30vw',
        maxWidth: '400px',
        position: 'relative',
        flex: '1',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 0,
        margin: '0 auto',
        textAlign: 'center',
        padding: '1em',
        width: '100%',
      }}
    >
      <h3>Join the List!</h3>
      <h4>Subscribe for email notifications & more!</h4>
      <form>
        Email Address:
        <input id={inputId} type="email" />
        <input type="button" value="Subscribe" />
      </form>
    </div>
  </div>
);

export default EmailForm;
