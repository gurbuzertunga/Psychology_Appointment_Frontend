import React from 'react';
import ConsultancyList from '../components/consultancyList';
import AppointmentForm from '../components/appointmentForm';

const Consultancies = () => {
  const handleClick = data => console.log(data); // eslint-disable-line
  return (
    <div>
      <h1>Welcome to Consultancies Page</h1>
      <ConsultancyList handleClick={handleClick} />
      <AppointmentForm />
    </div>
  );
};

export default Consultancies;
