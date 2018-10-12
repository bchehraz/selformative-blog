import React from 'react';
import Img from 'gatsby-image';

import './index.sass';

const inputId = '123';

const EmailForm = ({ img }) => (
  <div className="email-form-container">
    <Img
      sizes={img.sizes}
      style={{
        position: 'absolute',
        left: '74vw',
        top: '500px',
        height: '350px',
        width: '25vw',
      }}
    />
    <form className="email-form">

      Email Address:
      <input id={inputId} type="email" />
    </form>
  </div>
);

export default EmailForm;
