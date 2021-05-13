import { GrDebian } from 'react-icons/gr';
import React from 'react';
import profilePic from '../assets/profilepic.jpg';

const Home = () => (
  <div className="flex flex-col lg:mt-1 mt-32">
    <div className="flex flex-col items-center">
      <GrDebian className="text-white text-8xl mt-4" />
      <h1 className="text-white  lg:text-2xl sm:text-4xl text-2xl font-bold mt-4">Jennifer Porter</h1>
      <p className="text-white font-light lg:text-base sm:text-2xl text-base mt-4">Clinical Psychologist, Psychotherapist, MSc</p>
    </div>
    <div className="flex sm:flex-row flex-col-reverse justify-evenly items-center  lg:mt-4 sm:mt-72 mt-24">
      <div className="flex flex-col sm:w-6/12 w-10/12">
        <h1 className="text-white lg:text-2xl sm:text-4xl text-2xl font-bold">ABOUT ME</h1>
        <p className="text-white lg:text-base sm:text-2xl text-base font-light mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Excepturi facere, provident ipsa commodi officia fugiat harum,
          rerum assumenda delectus sapiente soluta omnis exercitationem in dicta?
        </p>
      </div>
      <img className="rounded-full sm:w-2/12 w-4/12" src={profilePic} alt="Profile" />
    </div>
  </div>
);

export default Home;
