import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../containers/Home';
import NavBar from '../containers/NavBar';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import MyPage from '../containers/MyPage';
import Appointments from '../containers/Appointments';
import Consultancies from '../containers/Consultancies';
import AdminPage from '../containers/AdminPage';
import ConsultancyContainer from '../containers/ConsultancyContainer';
import Modal from './modal/modal';

function App({ modalIsOpen, loginOrSignup }) {
  return (
    <>
      {
        modalIsOpen
        && (
          <Modal>
            { loginOrSignup === 'login' ? <Login /> : <SignUp />}
          </Modal>
        )
      }
      <Router>
        <div className="App flex flex-col">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mypage" component={MyPage} />
            {/* <Route exact path="/signup" component={SignUp} /> */}
            {/* <Route exact path="/auth/login" component={Login} /> */}
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/consultancies" component={Consultancies} />
            <Route exact path="/admin" component={AdminPage} />
            <Route path="/consultancies/:id" component={ConsultancyContainer} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

App.propTypes = {
  modalIsOpen: PropTypes.bool,
  loginOrSignup: PropTypes.string,
};

App.defaultProps = {
  modalIsOpen: false,
  loginOrSignup: '',
};

const mapStateToProps = state => ({
  modalIsOpen: state.modalReducer.modalIsOpen,
  loginOrSignup: state.modalReducer.loginOrSignup,
});

export default connect(mapStateToProps)(App);
