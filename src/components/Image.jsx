import React from 'react';
import PropTypes from "prop-types";

const Image = ({ src, alt, srcDesktop }) => {
  return ( 
    <img 
      className='Image'
      src={src}
      alt={alt}
      width={380}
      height={500}
      srcSet={`${src} 300w, ${srcDesktop} 1000w`}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcDesktop: PropTypes.string
}

export default Image