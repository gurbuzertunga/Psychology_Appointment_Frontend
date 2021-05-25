import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import Backdrop from './backdrop';

const Modal = props => {
  const { children } = props;
  return (
    <div>
      <Backdrop />
      <div className="Modal">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Modal;
