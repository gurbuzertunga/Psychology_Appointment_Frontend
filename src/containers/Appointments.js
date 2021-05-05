import React from 'react';
import ConsultancyList from '../components/consultancyList';
import AppointmentForm from '../components/appointmentForm';

const Appointments = () => {
  console.log('TEST');
  return (
    <div>
      <h1>Appointments Page</h1>
      <ConsultancyList />
      <AppointmentForm />
    </div>
  );
};

export default Appointments;
