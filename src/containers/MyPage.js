import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppointmentList from '../components/appointmentList';

const MyPage = props => {
  const { authToken } = props;
  if (!authToken) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Welcome to My Page</h1>
      <AppointmentList />
    </div>
  );
};

MyPage.propTypes = {
  authToken: PropTypes.string,
};
MyPage.defaultProps = {
  authToken: '',
};

const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(MyPage);