import { CREATE_TOKEN, REMOVE_TOKEN, CREATE_USER } from '../../actions/index';

const defaultState = {
  name: '',
  email: '',
  authToken: '',
  isDoctor: null,
};
const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOKEN:
      return { ...state, authToken: action.payload.token, isDoctor: action.payload.isDoctor };
    case CREATE_USER:
      return {
        ...state, name: action.payload.name, email: action.payload.email,
      };
    case REMOVE_TOKEN:
      return defaultState;
    default:
      return state;
  }
};
export default authenticationReducer;
