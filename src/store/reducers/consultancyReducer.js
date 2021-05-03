/* eslint-disable */
import { CREATE_CONSULTANCIES_LIST } from '../../actions/index';

const defaultState = {
  consultancies: '',
};

const consultanciesReducer = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case CREATE_CONSULTANCIES_LIST:
      console.log(action.payload);
      return { ...state, authToken: action.payload};
    default:
      return state;
  }
};
export default consultanciesReducer;
