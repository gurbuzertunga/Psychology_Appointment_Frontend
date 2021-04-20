import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../requests/signUp';
import { createToken } from '../store/actions';

export const signup = ({createToken, history}) => {
  return (
    <div>
      <h1>Welcome to Sign Up Page!</h1>
      
    </div>
  )
}
