import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAppointment } from '../actions';
import makeAppointment from '../requests/makeAppointment';

const data = {
  time: '',
  problem: '',
  date: '',
  consultancy_id: null,
};

const AppointmentForm = ({ consultancies, authToken, setAppointment }) => {
  const [state, setState] = useState(data);
  const history = useHistory();
  const handleInputChange = e => {
    let id;
    consultancies.forEach(consultancy => {
      if (consultancy.area === e.target.value) {
        id = consultancy.id;
      }
    });
    const appointmentReq = { ...state, consultancy_id: id };
    appointmentReq[e.target.name] = e.target.value;
    setState(appointmentReq);
  };

  const handleSubmit = e => {
    e.preventDefault();
    makeAppointment({ ...state, authToken }, setAppointment);
    console.log('IM HERE');
    setTimeout(() => {
      history.push('/mypage');
    }, 1000);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-white lg:text-2xl sm:text-4xl text-2xl text-center font-bold my-4">Make an Appointment</h1>
      <form className="flex flex-col border border-gray-300 rounded py-4 mx-auto" onSubmit={handleSubmit}>
        <input className="lg:text-base sm:text-4xl text-2xl font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="time" name="time" id="time" onChange={handleInputChange} />
        <input className="lg:text-base sm:text-4xl text-2xl  font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="date" name="date" id="date" onChange={handleInputChange} />
        <textarea className="lg:text-sm sm:text-4xl text-2xl font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" name="problem" id="problem" placeholder="Some details about your problem..." onChange={handleInputChange} />
        <select className="lg:text-base sm:text-4xl text-2xl font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" name="consultancies" id="" onChange={handleInputChange}>
          return (
          {
            consultancies && consultancies.map(consultancy => (
              <option
                className="lg:text-base text-4xl font-light focus:outline-none focus:ring focus:border-blue-300 bg-blue-500 bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded"
                key={consultancy.id}
                id={consultancy.id}
                value={consultancy.area}
              >
                {consultancy.area}
              </option>
            ))
          }
          );
        </select>
        <button className="text-white font-light lg:text-base text-4xl" type="submit">Submit</button>
      </form>
    </div>
  );
};

AppointmentForm.propTypes = {
  consultancies: PropTypes.arrayOf(Array),
  authToken: PropTypes.string,
  setAppointment: PropTypes.func.isRequired,
};
AppointmentForm.defaultProps = {
  consultancies: [],
  authToken: '',
};

const mapStateToProps = state => ({
  consultancies: state.consultanciesReducer.consultancies,
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps, { setAppointment })(AppointmentForm);
