import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from '../components/signUpForm';
import signUpRequest from '../requests/signUpRequest';
import { createToken, testAction, closeModal } from '../actions/index';

const SignUp = ({ testAction, createToken, closeModal }) => {
  const history = useHistory();
  const handleSubmit = data => {
    const { name, email } = data;
    testAction({ name, email });
    signUpRequest(createToken, data);
    setTimeout(() => {
      history.push('/consultancies');
    }, 2000);
    closeModal();
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-center my-4 text-white text-2xl font-extrabold">Sign Up</h1>
      <SignUpForm handleClick={handleSubmit} />
      <Link className="text-center my-4 text-white" to="/auth/login">Already have an account?</Link>
    </div>
  );
};
SignUp.propTypes = {
  createToken: PropTypes.func,
  testAction: PropTypes.func,
  closeModal: PropTypes.func,
};

SignUp.defaultProps = {
  createToken,
  testAction,
  closeModal,
};
export default connect(null, { createToken, testAction, closeModal })(SignUp);
