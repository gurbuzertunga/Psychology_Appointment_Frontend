/* eslint-disable */
import { OPEN_MODAL, CLOSE_MODAL, IS_LOADING_STARTED } from '../../actions/index';

const defaultState = {
  modalIsOpen: false,
  loginOrSignup: 'login',
  isLoadingStarted: false,
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state,  modalIsOpen: true, loginOrSignup: action.payload };
    case CLOSE_MODAL:
      return { ...state,  modalIsOpen: false };
    case IS_LOADING_STARTED:
      return { ...state, isLoadingStarted: !state.isLoadingStarted };
    default:
      return state;
  }
};
export default modalReducer;
