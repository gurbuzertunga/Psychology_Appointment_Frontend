import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleClick }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    let {
      email, password,
    } = data;

    if (e.target.id === 'email') {
      email = e.target.value;
    } else if (e.target.id === 'password') {
      password = e.target.value;
    }
    setData({
      email,
      password,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleClick(data);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="submit" />
    </form>
  );
};

LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LoginForm;
