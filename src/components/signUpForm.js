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
    <form className="flex flex-col border border-gray-300 rounded py-4 mx-auto lg:w-5/12 sm:w-full w-11/12" onSubmit={handleSubmit}>
      <input className="lg:text-base sm:text-2xl font-light focus:outline-none focus:ring focus:border-blue-500 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" placeholder="Name" type="text" id="name" value={data.name} onChange={handleChange} />
      <input className="lg:text-base sm:text-2xl font-light focus:outline-none focus:ring focus:border-blue-500 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" placeholder="Email" type="email" id="email" value={data.email} onChange={handleChange} />
      <input className="lg:text-base sm:text-2xl font-light focus:outline-none focus:ring focus:border-blue-500 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" placeholder="Password" type="password" id="password" value={data.password} onChange={handleChange} />
      <input className="lg:text-base sm:text-2xl font-light focus:outline-none focus:ring focus:border-blue-500 bg-transparent bolder placeholder-white text-white p-1 mb-4 mx-6 border border-gray-300 rounded" placeholder="Password Confirm" type="password" id="passwordConfirm" value={data.passwordConfirm} onChange={handleChange} />
      <input className="lg:text-base sm:text-2xl font-light focus:outline-none focus:ring focus:border-blue-500 bg-transparent bolder text-white mr-2 border lg:w-4/12 w-5/12 place-self-center border-gray-300 rounded" type="submit" value="Submit" />
    </form>
  );
};

SignUpForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignUpForm;
