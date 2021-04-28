/* eslint-disable */
import TYPES from '../services/appointmentapi';
import { CREATE_TOKEN } from './types';

const createToken = async options => {
  const response = await fetch(`${TYPES.BASE}/signup`, options);
  const data = await response.json();
  const auth = {
    authToken: data.auth_token,
  };
  console.log(auth);
  return {
    type: CREATE_TOKEN,
    payload: auth,
  }
};

const removeToken = () => ({
  type: REMOVE_TOKEN,
});

const createConsultanciesList = list => ({
  type: CREATE_CONSULTANCIES_LIST,
  payload: list,
});

const createAppointmentsList = list => ({
  type: CREATE_APPOINTMENTS_LIST,
  payload: list,
});

const setAppointment = appointment => ({
  type: SET_APPOINTMENT,
  payload: appointment,
});

const removeAppointment = id => ({
  type: REMOVE_APPOINTMENT,
  payload: id,
});

export {
  createToken,
  removeToken,
  createConsultanciesList,
  createAppointmentsList,
  setAppointment,
  removeAppointment,
};
