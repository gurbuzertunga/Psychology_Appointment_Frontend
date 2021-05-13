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
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input placeholder="Area" className="lg:text-base sm:text-4xl text-2xl font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="text" name="area" id="area" onChange={handleInputChange} />
      <textarea placeholder="Details" className="lg:text-base sm:text-4xl text-2xl font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" name="details" id="details" onChange={handleInputChange} />
      <button className="lg:text-base sm:text-4xl text-2xl text-white font-light" type="submit">Submit</button>
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
