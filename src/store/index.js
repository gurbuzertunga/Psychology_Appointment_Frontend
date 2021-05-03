import { combineReducers } from 'redux';
import authenticationReducer from './reducers/authenticationReducer';
import consultanciesReducer from './reducers/consultancyReducer';

const rootReducer = combineReducers({
  authenticationReducer, consultanciesReducer,
});

export default rootReducer;
