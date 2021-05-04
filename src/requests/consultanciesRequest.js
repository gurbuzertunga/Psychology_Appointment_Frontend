/* eslint-disable */
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { BASE, CONSULTANCIES } from '../services/appointmentapi';
import { createConsultanciesList } from '../actions/index';

const consultancyRequest = async ({ auth, createConsultanciesList }) => {
  
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: auth,
    },
  };
  const response = await fetch(`${BASE}${CONSULTANCIES}`, options);
  const data = await response.json();
  try {
    createConsultanciesList(data);
  } catch (error) {
    createConsultanciesList(data);
  }
};



consultancyRequest.propTypes = {
  createConsultanciesList: PropTypes.func,
};
consultancyRequest.defaultProps = {
  createConsultanciesList,
};
const mapStateToProps = state => ({
  auth: state.authenticationReducer.authToken,
})

export default connect(mapStateToProps)(consultancyRequest);
