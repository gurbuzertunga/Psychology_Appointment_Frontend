import { combineReducers } from 'redux';
import authenticationReducer from './reducers/authenticationReducer';

const rootReducer = combineReducers({
  authenticationReducer,
});

export default rootReducer;
