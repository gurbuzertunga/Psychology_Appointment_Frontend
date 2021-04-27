import { CREATE_TOKEN, REMOVE_TOKEN } from '../../actions/types';

const defaultState = {
  name: '',
  email: '',
  authToken: '',
};

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOKEN:
      console.log('sadsafdasdf');
      return { ...state, authToken: action.payload };
    case REMOVE_TOKEN:
      return {
        name: '',
        email: '',
        authToken: '',
      };
    default:
      console.log(action.type);
      return state;
  }
};

export default authenticationReducer;
