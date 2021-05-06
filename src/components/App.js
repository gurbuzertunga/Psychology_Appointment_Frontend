import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../containers/NavBar';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Appointments from '../containers/Appointments';
import Consultancies from '../containers/Consultancies';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World!</h1>
        <NavBar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/consultancies" component={Consultancies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
