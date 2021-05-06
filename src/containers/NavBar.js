import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/signup">Sign up</Link>
    <Link to="/auth/login">Login</Link>
    <Link to="/appointments">Appointments</Link>
    <Link to="/consultancies">Consultancies</Link>
  </div>
);

const mapStateToProp = state => ({ authToken: state.authentication });
export default connect(mapStateToProp)(Navbar);
