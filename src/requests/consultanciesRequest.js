/* eslint-disable */
import { useSelector } from 'react-redux'
import { BASE, CONSULTANCIES } from '../services/appointmentapi';

const consultancyRequest = async (createConsultanciesList) => {
  const auth = useSelector(state => state.authenticationReducer.authToken);
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: auth,
    },
  };
  const response = await fetch(`${BASE}${CONSULTANCIES}`, options);
  const data = await response.json();
  console.log(createConsultanciesList(data));
  try {
    createConsultanciesList(data);
  } catch (error) {
    createConsultanciesList(data);
  }
};

export default consultancyRequest;
