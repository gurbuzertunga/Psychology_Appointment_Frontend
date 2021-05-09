import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appointmentsRequest from '../requests/appointmentsRequest';
import { createAppointmentsList } from '../actions/index';
import Appointment from './appointment';

class AppointmentList extends Component {
  componentDidMount() {
    const { createAppointmentsList, auth } = this.props;
    appointmentsRequest(createAppointmentsList, auth);
  }

  static handleClick() {

  }

  render() {
    const { appointments, handleClick } = this.props;
    return (
      <ul>
        {
          appointments && appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              handleClick={handleClick}
            />
          ))
        }
      </ul>
    );
  }
}
AppointmentList.propTypes = {
  createAppointmentsList: PropTypes.func,
  auth: PropTypes.string.isRequired,
  appointments: PropTypes.arrayOf(Array),
  handleClick: PropTypes.func.isRequired,
};
AppointmentList.defaultProps = {
  createAppointmentsList,
  appointments: [],
};

const mapStateToProps = state => ({
  appointments: state.appointmentsReducer.appointments,
  auth: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps, { createAppointmentsList })(AppointmentList);
