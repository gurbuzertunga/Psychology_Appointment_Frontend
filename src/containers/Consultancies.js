import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConsultancyList from '../components/consultancyList';
import AppointmentForm from '../components/appointmentForm';

const Consultancies = props => {
  const { authToken } = props;
  if (!authToken) {
    return <Redirect to="/" />;
  }
  const handleClick = data => console.log(data); // eslint-disable-line
  return (
    <div className="flex flex-col">
      <h1 className="text-center my-4 text-white text-2xl font-extrabold">List of Consultancy areas we can help you</h1>
      <ConsultancyList handleClick={handleClick} />
      <AppointmentForm />
    </div>
  );
};

Consultancies.propTypes = {
  authToken: PropTypes.string,
};
Consultancies.defaultProps = {
  authToken: '',
};
const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(Consultancies);
