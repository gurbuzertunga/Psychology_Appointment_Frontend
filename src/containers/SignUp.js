import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/signUpForm';
import signUpRequest from '../requests/signUpRequest';
import { createToken } from '../store/actions';

export const SignUp = ({ createToken }) => {
  const handleSubmit = data => {
    signUpRequest(createToken, data);
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
  createToken: PropTypes.func.isRequired,
};

const mapDispatchToProp = {
  createToken,
};

export default connect(null, mapDispatchToProp)(SignUp);
