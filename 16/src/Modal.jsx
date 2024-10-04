import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Modal = ({ isOpen, children }) => {
    return (
      <div className={cn('modal', { 'fade show': isOpen })} style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  Modal.Header = ({ toggle, children }) => {
    return (
      <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button
          type="button"
          className="btn-close"
          onClick={toggle}
          aria-label="Close"
        ></button>
      </div>
    );
  };
  
  Modal.Body = ({ children }) => {
    return <div className="modal-body">{children}</div>;
  };
  
  Modal.Footer = ({ children }) => {
    return <div className="modal-footer">{children}</div>;
  };
  
export default Modal;
// END
