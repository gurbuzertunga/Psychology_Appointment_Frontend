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
    <form className="flex flex-col border border-gray-300 rounded py-4 mx-auto md:w-5/12 w-10/12" onSubmit={handleSubmit}>
      <input placeholder="Email" className="focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white font-light text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="email" id="email" value={data.email} onChange={handleChange} />
      <input placeholder="Password" className="focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder placeholder-white font-light text-white p-1 mb-4 mx-6 border border-gray-300 rounded" type="password" id="password" value={data.password} onChange={handleChange} />
      <input className="focus:outline-none focus:ring focus:border-blue-300 bg-transparent bolder text-white mr-2 border w-4/12 place-self-center font-light border-gray-300 rounded" type="submit" value="Submit" />
    </form>
  );
};

LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LoginForm;
