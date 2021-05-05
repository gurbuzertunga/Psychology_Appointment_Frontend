/* eslint-disable */
import { connect } from 'react-redux';
import { BASE, APPOINTMENTS } from '../services/appointmentapi';

const makeAppointment = async appointment => {
  // const { appointment } = props;
  console.log(appointment);
  const body = {
    email: userdata.email,
    password: userdata.password,
  };
  const options = { //eslint-disable-line
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${BASE}${APPOINTMENTS}`, options);
  const data = await response.json();
  const auth = {
    authToken: data.auth_token,
  };
  // try {
  //   createToken(auth);
  // } catch (error) {
  //   createToken(error);
  // }
};


export default makeAppointment;