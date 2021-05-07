/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createAppointmentsList } from '../actions';
import makeAppointment from '../requests/makeAppointment';

const data = {
  time: '',
  problem: '',
  consultancy_id: null,
};

const AppointmentForm = ({consultancies, authToken, createAppointmentsList}) => {

  const [state,setState] = useState(data);
  const handleInputChange  = e => {
    let id;
    consultancies.forEach(consultancy => {
      if (consultancy.area === e.target.value) {
        id = consultancy.id;
      }
    })
    const appointment_req = { ...state, consultancy_id: id };
    appointment_req[e.target.name] = e.target.value;
    setState(appointment_req);
  }

  const handleSubmit = e => {
    e.preventDefault();
    makeAppointment({...state, authToken}, createAppointmentsList);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="time" name="time" id="time" onChange={handleInputChange } />
      <input type="text" name="problem" id="problem" onChange={handleInputChange } />
      <select name="consultancies" id="" onChange={handleInputChange}>
        return (
        {
          consultancies && consultancies.map(consultancy => (
            <option key={consultancy.id} id={consultancy.id} value={consultancy.area}>{consultancy.area}</option>
          ))
        } 
    );
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = state => {
  return({
  consultancies: state.consultanciesReducer.consultancies,
  authToken: state.authenticationReducer.authToken,
});
};

export default connect(mapStateToProps,{ createAppointmentsList })(AppointmentForm);
