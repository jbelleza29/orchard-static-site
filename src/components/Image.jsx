import './Image.css';
import PropTypes from "prop-types";

const Image = ({ src, alt, srcDesktop, width, height }) => {
  return ( 
    <img 
      className='Image'
      src={src}
      alt={alt}
      width={width}
      height={height}
      srcSet={`${src} 300w, ${srcDesktop} 1000w`}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcDesktop: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Image