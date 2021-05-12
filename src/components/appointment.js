import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
});
const Appointment = ({ appointment, user }) => {
  const {
    time,
    problem,
    date,
  } = appointment;

  return (
    <div data-aos="fade-down" className="bg-transparent border border-gray-300 p-4 mx-4 rounded">
      <div className="flex">
        <h2 className="text-white font-light mt-2 p-2 w-max">Date:</h2>
        <h2 className="text-white font-light mt-2 p-2 w-max">{date}</h2>
      </div>
      <div className="flex">
        <h2 className="text-white font-light mt-2 p-2 w-max">Time:</h2>
        <h2 className="text-white font-light mt-2 p-2 w-max">{time}</h2>
      </div>
      <div className="flex">
        <h2 className="text-white font-light mt-2 p-2 w-max">Problem:</h2>
        <h2 className="text-white font-light mt-2 p-2">{problem}</h2>
      </div>
      <div className="flex">
        <h2 className="text-white font-light mt-2 p-2 w-max">Patient:</h2>
        <h2 className="text-white font-light mt-2 p-2">{user}</h2>
      </div>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default withRouter(Appointment);
