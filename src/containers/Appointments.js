import React from 'react';
import AppointmentList from '../components/appointmentList';

const Appointments = () => {
  const handleClick = data => console.log(data); // eslint-disable-line
  return (
    <div>
      <h1>Welcome to Appointments Page</h1>
      <AppointmentList handleClick={handleClick} />
    </div>
  );
};

export default Appointments;
