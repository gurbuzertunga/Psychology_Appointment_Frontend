import * as types from '../../actions/types';

const defaultState = {
  name: '',
  email: '',
  test: '',
  authToken: '',
};
const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CREATE_TOKEN:
      console.log(action, 'ddsadw');
      return { ...state, authToken: action.payload };
    case 'TEST':
      return { ...state, test: 'test worked' };
    default:
      return state;
  }
};
export default authenticationReducer;
