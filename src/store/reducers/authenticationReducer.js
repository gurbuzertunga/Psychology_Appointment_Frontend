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
      console.log(action, 'ddsadw');
      return action.payload;
    case 'TEST':
      console.log('TEST REDUCER WORLKED');
      return { ...state, test: 'test worked' };
    default:
      return state;
  }
};
export default authenticationReducer;
