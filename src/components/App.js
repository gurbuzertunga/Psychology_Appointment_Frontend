import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../containers/NavBar';
import { SignUp } from '../containers/SignUp';
import signUpRequest from '../requests/signUpRequest';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World!</h1>
        <NavBar />
        <Switch>
          <Route exact path="/signup" component={SignUp}>
            <SignUp createToken={signUpRequest} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
