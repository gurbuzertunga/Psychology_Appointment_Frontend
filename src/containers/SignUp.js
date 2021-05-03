import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from '../components/signUpForm';
import signUpRequest from '../requests/signUpRequest';
import { createToken, testAction } from '../actions/index';

const SignUp = ({ testAction, createToken }) => {
  const handleSubmit = data => {
    const { name, email } = data;
    testAction({ name, email });
    signUpRequest(createToken, data);
  };
  return (
    <div>
      <h1>Welcome to Sign Up Page!</h1>
      <SignUpForm handleClick={handleSubmit} />
      <Link to="/auth/login">You have already an account?</Link>
    </div>
  );
};
SignUp.propTypes = {
  createToken: PropTypes.func,
  testAction: PropTypes.func,
};

SignUp.defaultProps = {
  createToken,
  testAction,
};
export default connect(null, { createToken, testAction })(SignUp);
