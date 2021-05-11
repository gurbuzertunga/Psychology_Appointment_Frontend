import {
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
import NotFound from '../containers/404';
import Loading from './loading';

const App = ({ modalIsOpen, loginOrSignup, isLoadingStarted }) => (
  <>
    {
      modalIsOpen
      && (
        <Modal>
          { isLoadingStarted ? (
            <Loading />
          ) : null}
          { !isLoadingStarted && loginOrSignup === 'login' ? <Login /> : !isLoadingStarted && <SignUp />}
        </Modal>
      )
    }
    <div className="App flex flex-col">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/consultancies" component={Consultancies} />
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/consultancies/:id" component={ConsultancyContainer} />
        <Route component={NotFound} />
        <Route component={Loading} />
      </Switch>
    </div>
  </>
);

App.propTypes = {
  modalIsOpen: PropTypes.bool,
  loginOrSignup: PropTypes.string,
  isLoadingStarted: PropTypes.bool,
};

App.defaultProps = {
  modalIsOpen: false,
  loginOrSignup: '',
  isLoadingStarted: false,
};

const mapStateToProps = state => ({
  modalIsOpen: state.modalReducer.modalIsOpen,
  loginOrSignup: state.modalReducer.loginOrSignup,
  isLoadingStarted: state.modalReducer.isLoadingStarted,
});

export default connect(mapStateToProps)(App);
