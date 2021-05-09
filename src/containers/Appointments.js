import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AppointmentList from '../components/appointmentList';

const Appointments = props => {
  const { authToken } = props; // eslint-disable-line
  if (!authToken) {
    return <Redirect to="/" />;
  }
  const handleClick = data => console.log(data); // eslint-disable-line
  return (
    <div>
      <h1>Welcome to Appointments Page</h1>
      <AppointmentList handleClick={handleClick} />
    </div>
  );
};

const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(Appointments);
