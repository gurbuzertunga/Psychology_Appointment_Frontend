import React from 'react';
import ConsultancyList from '../components/consultancyList';

const Appointments = () => {
  console.log('TEST');
  // const consultancies = consultancyRequest();
  return (
    <div>
      <h1>Appointments Page</h1>
      <ConsultancyList />
    </div>
  );
};

export default Appointments;
