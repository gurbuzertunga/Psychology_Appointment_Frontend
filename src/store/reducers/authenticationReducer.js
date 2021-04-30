/* eslint-disable */
import * as types from '../../actions/types';

const defaultState = {
  name: '',
  email: '',
  test: '',
  authToken: '',
};
const authenticationReducer = (state = defaultState, action) => {
  console.log(action);
  // debugger
  switch (action.type) {
    case types.CREATE_TOKEN:
      console.log(action, 'ddsadw');
      return { ...state, authToken: action.payload };
    case 'TEST':
      console.log('TEST REDUCER WORLKED');
      return { ...state, test: 'test worked' };
    default:
      return state;
  }
};
export default authenticationReducer;
