import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/signUpForm';
import { signUp } from '../requests/signUp';
import { createToken } from '../store/actions';

export const SignUp = ({ createToken, history }) => {
  const handleSubmit = data => {
    signUp(createToken, data);
    history.push('/');
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProp = {
  createToken,
};

export default connect(null, mapDispatchToProp)(SignUp);
