/* eslint-disable */
import { CREATE_CONSULTANCIES_LIST } from '../../actions/index';

const defaultState = {
  consultancies: '',
};

const consultanciesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_CONSULTANCIES_LIST:
      return { ...state, consultancies: action.payload};
    default:
      return state;
  }
};
export default consultanciesReducer;
