import React from 'react';
import ConsultancyRequest from '../requests/consultanciesRequest';

const Appointments = () => {
  console.log('TEST');
  // const consultancies = consultancyRequest();
  return (
    <div>
      <h1>Appointments Page</h1>
      {/* <ul>
        {
          consultancies.then(cons => cons && cons.map(el => (
            <li key={el.id}>el.id</li>
          )))
        }
      </ul> */}
      <ConsultancyRequest />
    </div>
  );
};

export default Appointments;
