import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, handleClick, history }) => {
  const {
    time,
    problem,
    date,
    id,
  } = appointment;
  const clickEffect = id => {
    handleClick();
    history.push(`/appointments/${id}`);
  };

  return (
    <div onClick={() => clickEffect(id)} onKeyPress={() => clickEffect(id)} role="presentation">
      <h2>{date}</h2>
      <h2>{time}</h2>
      <h3>{problem}</h3>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withRouter(Appointment);
