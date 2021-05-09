import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ConsultancyList from '../components/consultancyList';
import AppointmentForm from '../components/appointmentForm';

const Consultancies = props => {
  const { authToken } = props; // eslint-disable-line
  console.log(authToken);
  if (!authToken) {
    return <Redirect to="/" />;
  }
  const handleClick = data => console.log(data); // eslint-disable-line
  return (
    <div>
      <h1>Welcome to Consultancies Page</h1>
      <ConsultancyList handleClick={handleClick} />
      <AppointmentForm />
    </div>
  );
};

const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(Consultancies);