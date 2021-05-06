import { CREATE_APPOINTMENTS_LIST } from '../../actions/index';

const defaultState = {
  appointments: [],
};

const appointmentsReducer = (state = defaultState, action) => {
  let { appointments } = { ...state };
  switch (action.type) {
    case CREATE_APPOINTMENTS_LIST:
      appointments = [...appointments, action.payload];
      return { ...state, appointments };
    default:
      return state;
  }
};
export default appointmentsReducer;
