/* eslint-disable */
// import axios from 'axios';
import BASE from '../services/appointmentapi';
import * as types from './types';

const createToken = options => {
  console.log('1');
  return async dispatch => {
    console.log('2');
    try {
      const response = await fetch(`${BASE}/signup`, options);
      const data = await response.json();
      const auth = {
        authToken: data.auth_token,
      };
      console.log(response);
      console.log(auth);
      dispatch(createTokenSuccess(auth))
    } catch (error) {
      console.log(error);
    }
  }
};
const createTokenSuccess = (data)=>{
  return {
    type: types.CREATE_TOKEN,
    payload: data,
  }
}
// const createToken = async options => {
//   const response = await fetch(`${BASE}/signup`, options);
//   const data = await response.json();
//   const auth = {
//     authToken: data.auth_token,
//   };
  
//   console.log(types);
//   return {
//     type: types.CREATE_TOKEN,
//     payload: auth,
//   }
// };

const removeToken = () => ({
  type: REMOVE_TOKEN,
});
const testAction = () => ({
  type: 'TEST',
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
  createConsultanciesList,
  createAppointmentsList,
  setAppointment,
  removeAppointment,
  testAction,
};