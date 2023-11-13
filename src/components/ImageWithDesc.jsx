import './ImageWithDesc.css';
import PropTypes from "prop-types";

import Image from './Image';

const ImageWithDesc = (props) => {
  const { description, title, ...imageProps } = props;
  return (
    <div className='image-with-desc'>
      <Image {...imageProps} />
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <a onClick={(e) => {console.log(e.target)}}>Read more</a>
      </article>
    </div>
  )
}

ImageWithDesc.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcDesktop: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  description: PropTypes.string,
  title: PropTypes.string
}

export default ImageWithDesc