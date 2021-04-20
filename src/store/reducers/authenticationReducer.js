import { CREATE_TOKEN, REMOVE_TOKEN } from '../actions'

const defaultState = {
  name = '',
  email = '',
  authToken = '',
}

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOKEN:
      return action.payload;
    case REMOVE_TOKEN:
      return {
        name = '',
        email = '',
        authToken = '',
      };
    default:
      return state;
  }
};

export default authenticationReducer;