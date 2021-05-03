/* eslint-disable */
const CREATE_TOKEN = 'CREATE_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const CREATE_CONSULTANCIES_LIST = 'CREATE_CONSULTANCIES_LIST';
const CREATE_APPOINTMENTS_LIST = 'CREATE_APPOINTMENTS_LIST';
const SET_APPOINTMENT = 'SET_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

const createToken = data => {
  return {
    type: CREATE_TOKEN,
    payload: data.authToken,
  }
}

const removeToken = () => ({
  type: REMOVE_TOKEN,
});
const testAction = data => {
  return {
    type: 'TEST',
    payload: data,
  }
};
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
  CREATE_TOKEN,
  createToken,
  CREATE_CONSULTANCIES_LIST,
  createConsultanciesList,
  CREATE_APPOINTMENTS_LIST,
  createAppointmentsList,
  SET_APPOINTMENT,
  setAppointment,
  REMOVE_APPOINTMENT,
  removeAppointment,
  testAction,
};