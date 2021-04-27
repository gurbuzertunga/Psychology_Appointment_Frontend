import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../containers/NavBar';
import { SignUp } from '../containers/SignUp';
import signUpRequest from '../requests/signUpRequest';

const App = ({ dispatch }) => (
  <Router>
    <div className="App">
      <h1>Hello World!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/signup">
          <SignUp createToken={signUpRequest} dispatch={dispatch} />
        </Route>
      </Switch>
    </div>
  </Router>
);
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect(null)(App);
