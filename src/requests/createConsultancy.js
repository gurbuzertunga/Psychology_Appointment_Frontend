import { BASE, CONSULTANCIES } from '../services/appointmentapi';

const CreateConsultancyRequest = async (userData, createConsultancy) => {
  const { area, details } = userData;
  const body = {
    area,
    details,
  };
  const options = { //eslint-disable-line
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: userData.authToken,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${BASE}${CONSULTANCIES}`, options);
  const data = await response.json();
  try {
    createConsultancy(data);
  } catch (error) {
    createConsultancy(data);
  }
};

export default CreateConsultancyRequest;
