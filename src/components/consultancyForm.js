/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createConsultancy } from '../actions';
import CreateConsultancyRequest from '../requests/createConsultancy';

const data = {
  area: '',
  details: '',
};

const ConsultancyForm = ({authToken, createConsultancy}) => {

  const [state,setState] = useState(data);
  const handleInputChange  = e => {
    const consultancy_req = { ...state};
    consultancy_req[e.target.name] = e.target.value;
    setState(consultancy_req);
  }

  const handleSubmit = e => {
    e.preventDefault();
    CreateConsultancyRequest({...state, authToken}, createConsultancy);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="area" id="area" onChange={handleInputChange } />
      <input type="textarea" name="details" id="details" onChange={handleInputChange } />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = state => {
  return({
  authToken: state.authenticationReducer.authToken,
});
};

export default connect(mapStateToProps,{ createConsultancy })(ConsultancyForm);
