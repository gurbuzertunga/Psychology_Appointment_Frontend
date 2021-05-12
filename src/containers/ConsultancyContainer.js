import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { setAppointment } from '../actions';
import makeAppointment from '../requests/makeAppointment';

AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
});
const ConsultancyContainer = ({ consultancies, authToken, setAppointment }) => {
  const { id } = useParams();
  if (!authToken) {
    return <Redirect to="/" />;
  }
  const data = {
    time: '',
    problem: '',
    date: '',
    consultancy_id: parseInt(id), // eslint-disable-line
  };

  const [state, setState] = useState(data);

  const handleInputChange = e => {
    const appointmentReq = { ...state };
    appointmentReq[e.target.name] = e.target.value;
    setState(appointmentReq);
  };

  const handleSubmit = e => {
    e.preventDefault();
    makeAppointment({ ...state, authToken }, setAppointment);
  };
  return (
    <div className="flex mt-16 justify-evenly">
      <div data-aos="fade-down" className="bg-transparent border border-gray-300 p-4 rounded w-5/12">
        <h1 className="text-white text-2xl font-bold my-4">Consultancy Details</h1>
        {
          consultancies.filter(consultancy => consultancy.id === parseInt(id)).map(el => ( // eslint-disable-line
            <div key={el.id}>
              <h4 className="text-white border-b-2 border-white w-max mt-4">{el.area}</h4>
              <p className="text-white font-light text-sm mt-4">{el.details}</p>
            </div>
          ))
        }
      </div>
      <form className="flex flex-col border border-gray-300 rounded py-4" onSubmit={handleSubmit}>
        <input className="font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="time" name="time" id="time" onChange={handleInputChange} />
        <input className="font-light focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="date" name="date" id="date" onChange={handleInputChange} />
        <textarea className="font-light text-sm focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" name="problem" id="problem" placeholder="Some details about your problem..." onChange={handleInputChange} />
        <button className="text-white font-light" type="submit">Submit</button>
      </form>
    </div>
  );
};
ConsultancyContainer.propTypes = {
  consultancies: PropTypes.arrayOf(Object).isRequired,
  authToken: PropTypes.string,
  setAppointment: PropTypes.func.isRequired,
};
ConsultancyContainer.defaultProps = {
  authToken: '',
};

const mapStateToPros = state => ({
  consultancies: state.consultanciesReducer.consultancies,
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToPros, { setAppointment })(ConsultancyContainer);
