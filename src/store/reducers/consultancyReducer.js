/* eslint-disable */
import { CREATE_CONSULTANCIES_LIST, CREATE_CONSULTANCY } from '../../actions/index';

const defaultState = {
  consultancies: [],
};

const consultanciesReducer = (state = defaultState, action) => {
  let { consultancies } = { ...state };
  switch (action.type) {
    case CREATE_CONSULTANCIES_LIST:
      consultancies = action.payload;
      return { ...state, consultancies }
    case CREATE_CONSULTANCY:
      consultancies = [...consultancies, action.payload];
      return { ...state, consultancies }
    default:
      return state;
  }
};
export default consultanciesReducer;
