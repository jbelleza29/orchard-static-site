import './Image.css';

import { useState } from 'react';
import PropTypes from "prop-types";

import Modal from './Modal';

const Image = ({ src, alt, srcDesktop, width, height, bottomBorder=false, showModalOnClick }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickShowModal = () => {
    setShowModal(true);
  }

  return ( 
    <>
      <img 
        className={`Image${bottomBorder ? ' bottom-border': ''} ${showModalOnClick ? 'with-modal' : ''}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        srcSet={`${src} 300w, ${srcDesktop} 1000w`}
        onClick={showModalOnClick && onClickShowModal}
      />
      <Modal 
        isOpen={showModal}
        onClose={()=> setShowModal(false)}
        imageSrc={srcDesktop}
        alt={alt}
      />
    </>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcDesktop: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  bottomBorder: PropTypes.bool,
  showModalOnClick: PropTypes.bool
}

export default Image