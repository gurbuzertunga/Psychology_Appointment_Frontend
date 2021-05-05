import { SET_APPOINTMENT } from '../../actions/index';

const defaultState = {
  appointments: '',
};

const appointmentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_APPOINTMENT:
      return { ...state, appointments: action.payload };
    default:
      return state;
  }
};
export default appointmentsReducer;
