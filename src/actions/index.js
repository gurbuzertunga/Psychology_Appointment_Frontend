const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const IS_LOADING_STARTED = 'IS_LOADING_STARTED';
const CREATE_TOKEN = 'CREATE_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const CREATE_CONSULTANCY = 'CREATE_CONSULTANCY';
const CREATE_CONSULTANCIES_LIST = 'CREATE_CONSULTANCIES_LIST';
const CREATE_APPOINTMENTS_LIST = 'CREATE_APPOINTMENTS_LIST';
const SET_APPOINTMENT = 'SET_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

const openModal = modalType => ({
  type: OPEN_MODAL,
  payload: modalType,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
});

const createToken = data => ({
  type: CREATE_TOKEN,
  payload: { token: data.authToken, isDoctor: data.isDoctor },
});

const isLoadingStarted = () => ({
  type: IS_LOADING_STARTED,
});

const removeToken = () => {
  console.log('remove token');
  return {
    type: REMOVE_TOKEN,
  };
};
const testAction = data => ({
  type: 'TEST',
  payload: data,
});
const createConsultancy = list => ({
  type: CREATE_CONSULTANCY,
  payload: list,
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
  openModal,
  OPEN_MODAL,
  closeModal,
  CLOSE_MODAL,
  isLoadingStarted,
  IS_LOADING_STARTED,
  CREATE_TOKEN,
  createToken,
  removeToken,
  REMOVE_TOKEN,
  CREATE_CONSULTANCY,
  createConsultancy,
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
