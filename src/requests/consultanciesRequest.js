import { BASE, CONSULTANCIES } from '../services/appointmentapi';

const consultancyRequest = async (createConsultanciesList, auth) => {
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
  try {
    createConsultanciesList(data);
  } catch (error) {
    createConsultanciesList(data);
  }
};

export default consultancyRequest;
