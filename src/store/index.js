import { combineReducers } from 'redux';
import authenticationReducer from './reducers/authenticationReducer';
import consultanciesReducer from './reducers/consultancyReducer';
import appointmentsReducer from './reducers/appointmentReducer';

const rootReducer = combineReducers({
  authenticationReducer,
  consultanciesReducer,
  appointmentsReducer,
});

export default rootReducer;
