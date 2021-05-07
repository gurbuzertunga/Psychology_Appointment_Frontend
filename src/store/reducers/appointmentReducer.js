import { CREATE_APPOINTMENTS_LIST, SET_APPOINTMENT } from '../../actions/index';

const defaultState = {
  appointments: [],
};

const appointmentsReducer = (state = defaultState, action) => {
  let { appointments } = { ...state };
  switch (action.type) {
    case CREATE_APPOINTMENTS_LIST:
      appointments = action.payload;
      console.log(appointments);
      return { ...state, appointments };
    case SET_APPOINTMENT:
      appointments = [...appointments, action.payload];
      console.log(appointments);
      return { ...state, appointments };
    default:
      return state;
  }
};
export default appointmentsReducer;
