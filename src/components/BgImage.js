import React from 'react';
import Img from 'gatsby-image';

const BgImage = ({ image, style }) => (
  <Img
    sizes={image.sizes}
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100vh',
      width: '100%',
      zIndex: 0,
      ...style,
    }}
  />
);

export default BgImage;
