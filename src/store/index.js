import { combineReducers } from 'redux';
import authenticationReducer from './reducers/authenticationReducer';
import consultanciesReducer from './reducers/consultancyReducer';
import appointmentsReducer from './reducers/appointmentReducer';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
  authenticationReducer,
  consultanciesReducer,
  appointmentsReducer,
  modalReducer,
});

export default rootReducer;
