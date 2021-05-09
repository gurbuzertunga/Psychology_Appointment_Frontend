import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createConsultancy } from '../actions';
import CreateConsultancyRequest from '../requests/createConsultancy';

const data = {
  area: '',
  details: '',
};

const ConsultancyForm = ({ authToken, createConsultancy }) => {
  const [state, setState] = useState(data);
  const handleInputChange = e => {
    const consultancyReq = { ...state };
    consultancyReq[e.target.name] = e.target.value;
    setState(consultancyReq);
  };

  const handleSubmit = e => {
    e.preventDefault();
    CreateConsultancyRequest({ ...state, authToken }, createConsultancy);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="area" id="area" onChange={handleInputChange} />
      <input type="textarea" name="details" id="details" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

ConsultancyForm.propTypes = {
  authToken: PropTypes.string,
  createConsultancy: PropTypes.func.isRequired,
};

ConsultancyForm.defaultProps = {
  authToken: '',
};

const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps, { createConsultancy })(ConsultancyForm);
