import { BASE, LOGIN } from '../services/appointmentapi';

const loginRequest = async (createToken, userdata) => {
  const body = {
    email: userdata.email,
    password: userdata.password,
  };
  const options = { //eslint-disable-line
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${BASE}${LOGIN}`, options);
  const data = await response.json();
  const auth = {
    authToken: data.auth_token,
  };
  try {
    createToken(auth);
  } catch (error) {
    createToken(error);
  }
};
export default loginRequest;
