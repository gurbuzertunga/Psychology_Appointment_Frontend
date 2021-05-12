import { GrDebian } from 'react-icons/gr';
import React from 'react';
import profilePic from '../assets/profilepic.jpg';

const Home = () => (
  <div className="flex flex-col mt-18">
    <div className="flex flex-col items-center">
      <GrDebian className="text-white text-8xl mt-4" />
      <h1 className="text-white text-2xl font-bold mt-4">Jennifer Porter</h1>
      <p className="text-white font-light mt-4">Clinical Psychologist, Psychotherapist, MSc</p>
    </div>
    <div className="flex justify-evenly items-center">
      <div className="flex flex-col w-6/12">
        <h1 className="text-white text-2xl font-bold mt-4">ABOUT ME</h1>
        <p className="text-white font-light mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Excepturi facere, provident ipsa commodi officia fugiat harum,
          rerum assumenda delectus sapiente soluta omnis exercitationem in dicta?
        </p>
      </div>
      <img className="rounded-full w-2/12 " src={profilePic} alt="Profile" />
    </div>
  </div>
);

export default Home;
