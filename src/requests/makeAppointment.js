import { BASE, APPOINTMENTS } from '../services/appointmentapi';

const makeAppointment = async (userData, setAppointment) => {
  const {
    time, date, problem, consultancy_id, authToken, // eslint-disable-line
  } = userData;
  const body = {
    time,
    problem,
    date,
    consultancy_id,
  };
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: authToken,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${BASE}${APPOINTMENTS}`, options);
  const data = await response.json();
  try {
    setAppointment(data);
  } catch (error) {
    setAppointment(data);
  }
};

export default makeAppointment;
