import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ConsultancyForm from '../components/consultancyForm';

const AdminPage = props => {
  const { authToken } = props; // eslint-disable-line
  if (!authToken) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Admin Page</h1>
      <ConsultancyForm />
    </div>
  );
};

const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(AdminPage);
