import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from '../components/signUpForm';
import signUpRequest from '../requests/signUpRequest';
import { createToken } from '../actions/index';

export const SignUp = ({ dispatch }) => {
  const handleSubmit = data => {
    signUpRequest(dispatch(createToken), data);
  };

  return (
    <div>
      <h1>Welcome to Sign Up Page!</h1>
      <SignUpForm handleClick={handleSubmit} />
      <Link to="/login">You have already an account?</Link>
    </div>
  );
};

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, { createToken })(SignUp);
