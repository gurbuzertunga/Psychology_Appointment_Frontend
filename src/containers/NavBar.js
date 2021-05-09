import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { isDoctor } = props;
  if (isDoctor === false) {
    return (
      <Link to="/consultancies">Consultancies</Link>
    );
  } else if (isDoctor === true) { // eslint-disable-line
    return (
      <div>
        <Link to="/appointments">Appointments</Link>
        <Link to="/admin">Admin Area</Link>
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
export default connect(mapStateToProp)(Navbar);
