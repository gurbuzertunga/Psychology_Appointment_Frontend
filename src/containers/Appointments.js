import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppointmentList from '../components/appointmentList';

const Appointments = props => {
  const { authToken } = props;
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

Appointments.propTypes = {
  authToken: PropTypes.string,
};
Appointments.defaultProps = {
  authToken: '',
};

const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(Appointments);
