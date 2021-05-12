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

  render() {
    const { appointments, user } = this.props;
    return (
      <div className="flex mt-16">
        {
          appointments && appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              user={user}
            />
          ))
        }
      </div>
    );
  }
}
AppointmentList.propTypes = {
  createAppointmentsList: PropTypes.func,
  auth: PropTypes.string.isRequired,
  appointments: PropTypes.arrayOf(Array),
  user: PropTypes.objectOf(Object),
};
AppointmentList.defaultProps = {
  createAppointmentsList,
  appointments: [],
  user: {},
};

const mapStateToProps = state => ({
  appointments: state.appointmentsReducer.appointments.appointments,
  user: state.appointmentsReducer.appointments.username,
  auth: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps, { createAppointmentsList })(AppointmentList);
