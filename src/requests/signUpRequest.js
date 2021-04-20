import { BASE } from '../services/appointmentapi';

const signUpRequest = async (createToken, userdata) => {
  const body = {
    name: userdata.name,
    email: userdata.email,
    password: userdata.password,
    password_confirmation: userdata.passwordConfirm,
  };
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${BASE}/signup`, options);
    const data = await response.json();

    const auth = {
      name: data.name,
      email: data.email,
      authToken: data.auth_token,
    };
    createToken(auth);
  } catch (error) {
    createToken(error);
  }
};

export default signUpRequest;
