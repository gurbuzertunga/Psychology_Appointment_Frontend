import { BASE } from '../services/appointmentapi';

const signUpRequest = async (createToken, userdata) => {
  const body = {
    name: userdata.name,
    email: userdata.email,
    password: userdata.password,
    password_confirmation: userdata.passwordConfirm,
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
  const response = await fetch(`${BASE}/signup`, options);
  const data = await response.json();
  const auth = {
    authToken: data.auth_token,
  };
  try {
    console.log(createToken(auth));
    createToken(auth);
  } catch (error) {
    createToken(error);
  }
};
export default signUpRequest;
