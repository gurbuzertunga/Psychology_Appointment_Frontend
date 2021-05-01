/* eslint-disable */
import { CREATE_TOKEN } from '../../actions/index';

const defaultState = {
  name: '',
  email: '',
  test: '',
  authToken: '',
};
const authenticationReducer = (state = defaultState, action) => {
  // debugger
  switch (action.type) {
    case CREATE_TOKEN:
      console.log(action.payload, 'ddsadw');
      return { ...state, authToken: action.payload};
    case 'TEST':
      console.log(action.payload, 'ddsadw');
      console.log('TEST REDUCER WORLKED');
      return { ...state, test: 'test worked', name: action.payload.name, email: action.payload.email };
    default:
      return state;
  }
};
export default authenticationReducer;
