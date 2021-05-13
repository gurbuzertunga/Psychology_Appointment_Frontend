import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from '../components/signUpForm';
import signUpRequest from '../requests/signUpRequest';
import {
  createToken,
  createUser,
  closeModal,
  openModal,
} from '../actions/index';

const SignUp = (
  {
    createUser,
    createToken,
    closeModal,
    openModal,
  },
) => {
  const history = useHistory();
  const handleSubmit = data => {
    const { name, email } = data;
    createUser({ name, email });
    signUpRequest(createToken, data);
    setTimeout(() => {
      history.push('/consultancies');
    }, 2000);
    closeModal();
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-center my-4 text-white lg:text-2xl text-4xl font-extrabold">Sign Up</h1>
      <SignUpForm handleClick={handleSubmit} />
      <div className="font-light text-center lg:text-base text-2xl cursor-pointer" onClick={() => openModal('login')} onKeyDown={openModal} role="presentation">Already have an Account?</div>
    </div>
  );
};
SignUp.propTypes = {
  createToken: PropTypes.func,
  createUser: PropTypes.func,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
};

SignUp.defaultProps = {
  createToken,
  createUser,
  closeModal,
  openModal,
};
export default connect(null, {
  createToken,
  createUser,
  closeModal,
  openModal,
})(SignUp);
