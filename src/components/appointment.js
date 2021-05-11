import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Appointment = ({ appointment }) => {
  const {
    time,
    problem,
    date,
  } = appointment;

  return (
    <div>
      <h2>{date}</h2>
      <h2>{time}</h2>
      <h3>{problem}</h3>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default withRouter(Appointment);
