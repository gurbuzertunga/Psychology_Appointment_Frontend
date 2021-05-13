import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConsultancyList from '../components/consultancyList';
import AppointmentForm from '../components/appointmentForm';

const Consultancies = props => {
  const { authToken } = props;
  if (!authToken) {
    return <Redirect to="/" />;
  }
  const handleClick = data => console.log(data); // eslint-disable-line
  return (
    <div className="flex lg:flex-row flex-col justify-evenly mt-24">
      <div className="flex flex-col items-center">
        <h1 className="text-center my-4 text-white lg:text-2xl sm:text-4xl text-2xl font-extrabold">Services</h1>
        <ConsultancyList handleClick={handleClick} />
      </div>
      <AppointmentForm />
    </div>
  );
};

Consultancies.propTypes = {
  authToken: PropTypes.string,
};
Consultancies.defaultProps = {
  authToken: '',
};
const mapStateToProps = state => ({
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps)(Consultancies);
