/* eslint-disable */
const CREATE_TOKEN = 'CREATE_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const CREATE_CONSULTANCIES_LIST = 'CREATE_CONSULTANCIES_LIST';
const CREATE_APPOINTMENTS_LIST = 'CREATE_APPOINTMENTS_LIST';
const SET_APPOINTMENT = 'SET_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

// import axios from 'axios';


// const createToken = options => {
//   console.log('1');
//   return async dispatch => {
//     console.log('2');
//     try {
//       const response = await fetch(`${BASE}/signup`, options);
//       const data = await response.json();
//       const auth = {
//         authToken: data.auth_token,
//       };
//       console.log(response);
//       console.log(auth);
//       dispatch(createTokenSuccess(auth))
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
// const createTokenSuccess = (data) => {
//   return {
//     type: types.CREATE_TOKEN,
//     payload: data,
//   }
// }
const createToken = auth => {
  return {
    type: CREATE_TOKEN,
    payload: auth,
  }
};

const removeToken = () => ({
  type: REMOVE_TOKEN,
});
const testAction = () => {
  return {
    type: 'TEST',
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
  createConsultanciesList,
  createAppointmentsList,
  setAppointment,
  removeAppointment,
  testAction,
};