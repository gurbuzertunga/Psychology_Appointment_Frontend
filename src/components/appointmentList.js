/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appointmentsRequest from '../requests/appointmentsRequest';
import { createAppointmentsList } from '../actions/index';
import Appointment from './appointment';

class AppointmentList extends Component {
  componentDidMount() {
    appointmentsRequest(this.props.createAppointmentsList, this.props.auth);
  }

  static handleClick() {

  }
  render() {
    const { appointments } = this.props;
    return (
      <ul>
        {
          appointments && appointments.map(appointment => (
            <Appointment key={appointment.id} appointment={appointment} handleClick={this.props.handleClick} />
          ))
        }
      </ul>
    );
  }
}
AppointmentList.propTypes = {
  createAppointmentsList: PropTypes.func,
  auth: PropTypes.string.isRequired,
};
AppointmentList.defaultProps = {
  createAppointmentsList,
};

const mapStateToProps = state => {
  return {
    appointments: state.appointmentsReducer.appointments,
    auth: state.authenticationReducer.authToken,
  };
};

export default connect(mapStateToProps, { createAppointmentsList })(AppointmentList);
