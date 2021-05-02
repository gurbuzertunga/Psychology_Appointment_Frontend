import { useState } from 'react';
import PropTypes from 'prop-types';

const SignUpForm = ({ handleClick }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = e => {
    let {
      name, email, password, passwordConfirm,
    } = data;

    if (e.target.id === 'name') {
      name = e.target.value;
    } else if (e.target.id === 'email') {
      email = e.target.value;
    } else if (e.target.id === 'password') {
      password = e.target.value;
    } else {
      passwordConfirm = e.target.value;
    }
    setData({
      name,
      email,
      password,
      passwordConfirm,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleClick(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Username:
        {' '}
        <input type="text" id="name" value={data.name} onChange={handleChange} />
      </label>
      <label htmlFor="email">
        E-Mail:
        {' '}
        <input type="email" id="email" value={data.email} onChange={handleChange} />
      </label>
      <label htmlFor="password">
        Password:
        {' '}
        <input type="text" id="password" value={data.password} onChange={handleChange} />
      </label>
      <label htmlFor="passwordConfirm">
        Password Confirmation:
        {' '}
        <input type="text" id="passwordConfirm" value={data.passwordConfirm} onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

SignUpForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignUpForm;
