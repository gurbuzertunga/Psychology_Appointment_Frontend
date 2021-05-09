import { BASE, SIGNUP } from '../services/appointmentapi';

const signUpRequest = async (createToken, userdata) => {
  const body = {
    name: userdata.name,
    email: userdata.email,
    password: userdata.password,
    password_confirmation: userdata.passwordConfirm,
  };
  const options = {
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
  const response = await fetch(`${BASE}${SIGNUP}`, options);
  const data = await response.json();
  const auth = {
    authToken: data.auth_token,
    isDoctor: data.doctor,
  };
  try {
    createToken(auth);
  } catch (error) {
    createToken(error);
  }
};
export default signUpRequest;
