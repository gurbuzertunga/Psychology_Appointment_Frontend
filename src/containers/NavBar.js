import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToken, openModal, closeModal } from '../actions/index';

const Navbar = props => {
  const { isDoctor, removeToken, openModal, closeModal } = props; // eslint-disable-line
  const handleSubmit = e => {
    e.preventDefault();
    removeToken();
  };
  if (isDoctor === false) {
    return (
      <div className="text-white bolder self-end">
        <Link className="mr-2" to="/consultancies">Consultancies</Link>
        <Link className="mr-2" to="/mypage">my page</Link>
        <button className="bg-transparent bolder text-white mr-2" type="submit" onClick={handleSubmit}>Signout</button>
      </div>
    );
  } else if (isDoctor === true) { // eslint-disable-line
    return (
      <div className="text-white bolder self-end">
        <Link className="mr-2" to="/appointments">Appointments</Link>
        <Link className="mr-2 bg-transparent" to="/admin">Admin Area</Link>
        <button className="bg-transparent bolder text-white mr-2" type="submit" onClick={handleSubmit}>Signout</button>
      </div>
    );
  } return (
    <div className="text-white bolder self-end">
      <div onClick={() => openModal('login')} onKeyDown={openModal} role="presentation">Login</div>
      <div onClick={() => openModal('signup')} onKeyDown={openModal} role="presentation">Sign Up</div>
    </div>
  );
};

const mapStateToProp = state => ({
  authToken: state.authenticationReducer.authToken,
  isDoctor: state.authenticationReducer.isDoctor,
});

Navbar.propTypes = {
  isDoctor: PropTypes.bool,
};

Navbar.defaultProps = {
  isDoctor: null,
};
export default connect(mapStateToProp, { removeToken, openModal, closeModal })(Navbar);
