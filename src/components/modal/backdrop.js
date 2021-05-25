import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../../actions';
import './backdrop.css';

const Backdrop = ({ closeModal }) => (
  <div className="Backdrop" onClick={closeModal} onKeyDown={closeModal} role="presentation" />
);

Backdrop.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default connect(null, { closeModal })(Backdrop);
