import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginForm';
import loginRequest from '../requests/loginRequest';
import { createToken, testAction } from '../actions/index';

const Login = ({ testAction, createToken }) => {
  const handleSubmit = data => {
    const { name, email } = data;
    testAction({ name, email });
    loginRequest(createToken, data);
  };
  return (
    <div>
      <h1>Welcome to Login Page!</h1>
      <LoginForm handleClick={handleSubmit} />
      <Link to="/signup">Create a new account</Link>
    </div>
  );
};
Login.propTypes = {
  createToken: PropTypes.func,
  testAction: PropTypes.func,
};
Login.defaultProps = {
  createToken,
  testAction,
};
export default connect(null, { createToken, testAction })(Login);
