/* eslint-disable */
import { OPEN_MODAL, CLOSE_MODAL, SWITCH_LOGIN_SIGNUP } from '../../actions/index';

const defaultState = {
  modalIsOpen: false,
  loginOrSignup: 'login',
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state,  modalIsOpen: true, loginOrSignup: action.payload };
    case CLOSE_MODAL:
      return { ...state,  modalIsOpen: false };
    default:
      return state;
  }
};
export default modalReducer;
