
import {createPortal} from 'react-dom';

import PropTypes from "prop-types";

export default function Modal({ isOpen, onClose, imageSrc, alt }) {
  if(!isOpen){
    return null;
  }
 return createPortal(
   <div className='modal'>
       <div className='modal-container'>
           <div className='modal-body'>
              <img src={imageSrc} alt={alt} width={380} height={600} />
           </div>
           <button onClick={onClose}>Close</button>
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
