/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { BASE, CONSULTANCIES } from '../services/appointmentapi';

const ConsultancyRequest = async props => {
  const { authToken } = props;
  console.log(authToken);
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: props.authToken,
    },
  };
  const response = await fetch(`${BASE}${CONSULTANCIES}`, options);
  const data = await response.json();
  console.log(data);
  return (
    <ul>
      {
        data && data.map(el => (
          <li key={el.id}>el.id</li>
        ))
      }
    </ul>
  );
};

const mapStateToProps = state => {
  const { authenticationReducer } = state;
  return { authToken: authenticationReducer.authToken };
};

export default connect(mapStateToProps)(ConsultancyRequest);
