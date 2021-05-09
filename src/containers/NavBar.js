import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToken } from '../actions/index';

const Navbar = props => {
  const { isDoctor, removeToken } = props; // eslint-disable-line
  const handleSubmit = e => {
    e.preventDefault();
    removeToken();
  };
  if (isDoctor === false) {
    return (
      <div>
        <Link to="/consultancies">Consultancies</Link>
        <button type="submit" onClick={handleSubmit}>Signout</button>
      </div>
    );
  } else if (isDoctor === true) { // eslint-disable-line
    return (
      <div>
        <Link to="/appointments">Appointments</Link>
        <Link to="/admin">Admin Area</Link>
        <Link to="/signout">signout</Link>
      </div>
    );
  } return (
    <div>
      <Link to="/signup">Sign up</Link>
      <Link to="/auth/login">Login</Link>
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
export default connect(mapStateToProp, { removeToken })(Navbar);
