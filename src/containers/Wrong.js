import React from 'react';
import wrongPass from '../assets/wrongpassword.jpg';

const Wrong = () => (
  <div className="flex flex-col mx-auto">
    <h1 className="text-center my-4 text-white text-2xl font-extrabold">Invalid Credentials</h1>
    <img src={wrongPass} alt="Wrong Password" />
  </div>
);

export default Wrong;
