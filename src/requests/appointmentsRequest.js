import { APPOINTMENTS, BASE } from '../services/appointmentapi';

const appointmentsRequest = async (createAppointmentsList, auth) => {
  console.log(auth);
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: auth,
    },
  };
  const response = await fetch(`${BASE}${APPOINTMENTS}`, options);
  const data = await response.json();
  console.log(data);
  try {
    createAppointmentsList(data);
  } catch (error) {
    createAppointmentsList(data);
  }
};

export default appointmentsRequest;
