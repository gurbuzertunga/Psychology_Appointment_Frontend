import { useState } from 'react';
import PropTypes from 'prop-types';


export const signUpForm = ({ handleClick }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e) => {
    let {
      name, email, password, passwordConfirm
    } = data;

    if (e.target.id == 'name') {
      name = e.target.value;
    }
    else if (e.target.id == 'email') {
      email = e.target.value;
    }
    else if (e.target.id == 'password') {
      password = e.target.value;
    }
    else {
      passwordConfirm = e.target.value;
    };
    setData({
      name,
      email,
      password,
      passwordConfirm,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(data);
  }


  return (
    <form onSubmit={handleSubmit} >
      
    </form>
  )
}
