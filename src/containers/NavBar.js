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
      <div className="text-white bolder self-end text-right mt-4 mr-4">
        <Link className="sm:text-3xl text-base lg:text-base mr-4 font-light" to="/">Home</Link>
        <Link className="sm:text-3xl text-base lg:text-base mr-4 font-light" to="/consultancies">Consultancies</Link>
        <Link className="sm:text-3xl text-base lg:text-base mr-4 font-light" to="/mypage">My Appointments</Link>
        <button className="sm:text-3xl text-base lg:text-base bg-transparent bolder mr-4 font-light" type="submit" onClick={handleSubmit}>Sign Out</button>
      </div>
    );
  } else if (isDoctor === true) { // eslint-disable-line
    return (
      <div className="text-white bolder text-right self-end mt-4 mr-4">
        <Link className="sm:text-3xl text-base lg:text-base mr-4 font-light" to="/">Home</Link>
        <Link className="sm:text-3xl text-base lg:text-base mr-4 font-light" to="/appointments">Appointments</Link>
        <Link className="sm:text-3xl text-base lg:text-base mr-4 font-light" to="/admin">Admin Area</Link>
        <button className="sm:text-3xl text-base lg:text-base bg-transparent bolder mr-4 font-light" type="submit" onClick={handleSubmit}>Signout</button>
      </div>
    );
  } return (
    <div className="text-white bolder text-right self-end flex mt-4 mr-4">
      <button className="sm:text-4xl text-base lg:text-base focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder text-white mr-4" type="submit" onClick={() => openModal('login')}>Login</button>
      <button className="sm:text-4xl text-base lg:text-base focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder text-white mr-4" type="submit" onClick={() => openModal('signup')}>Sign Up</button>
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
