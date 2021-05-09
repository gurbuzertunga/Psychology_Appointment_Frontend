/* eslint-disable */
import { CREATE_TOKEN, REMOVE_TOKEN } from '../../actions/index';

const defaultState = {
  name: '',
  email: '',
  test: '',
  authToken: '',
  isDoctor: null,
};
const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOKEN:
      return { ...state, authToken: action.payload.token, isDoctor: action.payload.isDoctor };
    case 'TEST':
      return { ...state, test: 'test worked', name: action.payload.name, email: action.payload.email };
    case REMOVE_TOKEN:
      console.log(action);
      return defaultState;
    default:
      return state;
  }
};
export default authenticationReducer;
