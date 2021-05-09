import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginForm';
import loginRequest from '../requests/loginRequest';
import { createToken, testAction } from '../actions/index';

const Login = props => {
  const { testAction, createToken } = props;
  const history = useHistory(); // eslint-disable-line
  const handleSubmit = async data => {
    const { name, email } = data;
    testAction({ name, email });
    const isDoctor = await loginRequest(createToken, data);
    setTimeout(() => {
      isDoctor ? history.push('/admin') : history.push('/consultancies'); // eslint-disable-line
    }, 4000);
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
Login.defaultProps = {
  createToken,
  testAction,
};

export default connect(null, { createToken, testAction })(Login);
