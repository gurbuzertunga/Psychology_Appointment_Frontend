import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/404.jpeg';

const NotFound = () => (
  <div className="self-center">
    <img src={notFoundImg} alt="Not Found" />
    <Link to="/">Back to Home Page</Link>
  </div>
);

export default NotFound;
