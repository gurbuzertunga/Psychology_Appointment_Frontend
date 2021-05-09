import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAppointment } from '../actions';
import makeAppointment from '../requests/makeAppointment';

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
    <div>
      <h1>Consultancy Details</h1>
      {
        consultancies.filter(consultancy => consultancy.id === parseInt(id)).map(el => ( // eslint-disable-line
          <div key={el.id}>
            <h4>{el.area}</h4>
            <p>{el.details}</p>
          </div>
        ))
      }
      <form onSubmit={handleSubmit}>
        <input type="time" name="time" id="time" onChange={handleInputChange} />
        <input type="date" name="date" id="date" onChange={handleInputChange} />
        <input type="text" name="problem" id="problem" onChange={handleInputChange} />
        <button type="submit">Submit</button>
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
