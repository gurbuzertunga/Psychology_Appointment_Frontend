/* eslint-disable */
import { createAppointmentsList } from '../actions';
import { BASE, APPOINTMENTS } from '../services/appointmentapi';

const makeAppointment = async (userData, createAppointmentsList) => {
  const { time, problem, consultancy_id } = userData;
  const body = {
    time: userData.time,
    problem: userData.problem,
    consultancy_id: userData.consultancy_id,
  };
  const options = { //eslint-disable-line
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: userData.authToken,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${BASE}${APPOINTMENTS}`, options);
  const data = await response.json();
  try {
    createAppointmentsList(data);
  } catch (error) {
    createAppointmentsList(data);
  }
};

export default makeAppointment;
