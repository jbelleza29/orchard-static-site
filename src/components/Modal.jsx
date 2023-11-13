import { useRef } from 'react';
import {createPortal} from 'react-dom';
import PropTypes from "prop-types";

import useOnClickOutside from '../hooks/useOnClickOutside';


export default function Modal({ isOpen, onClose, imageSrc, alt }) {
  const modalElement = useRef(null);
  useOnClickOutside(modalElement, onClose);

  if(!isOpen){
    return null;
  }

  return createPortal(
    <div className='modal'>
      <div className='modal-container' ref={modalElement}>
        <button className='modal-close' onClick={onClose}>X</button>
        <div className='modal-body'>
          <img src={imageSrc} alt={alt} width={380} />
        </div>
      </div>
    </div>
   , document.getElementById('modal')
 )
}

Modal.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
