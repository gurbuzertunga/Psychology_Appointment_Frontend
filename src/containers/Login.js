import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginForm';
import loginRequest from '../requests/loginRequest';
import {
  createToken,
  testAction,
  closeModal,
  openModal,
  isLoadingStarted,
} from '../actions/index';

const Login = props => {
  const {
    testAction,
    createToken,
    closeModal,
    openModal,
    isLoadingStarted,
  } = props;
  const history = useHistory(); // eslint-disable-line
  const handleSubmit = async data => {  // eslint-disable-line
    isLoadingStarted();
    const { name, email } = data;
    testAction({ name, email });
    const doctor = await loginRequest(createToken, data);
    doctor ? history.push('/admin') : history.push('/consultancies'); // eslint-disable-line    
    closeModal();
    isLoadingStarted();
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-center my-4 text-white text-2xl font-extrabold">Login</h1>
      <LoginForm handleClick={handleSubmit} />
      <div onClick={() => openModal('signup')} onKeyDown={openModal} role="presentation">Create a new Account</div>
    </div>
  );
};
Login.propTypes = {
  createToken: PropTypes.func,
  isLoadingStarted: PropTypes.func,
  testAction: PropTypes.func,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
Login.defaultProps = {
  createToken,
  testAction,
  closeModal,
  openModal,
  isLoadingStarted,
};

export default connect(null, {
  createToken,
  testAction,
  closeModal,
  openModal,
  isLoadingStarted,
})(Login);
