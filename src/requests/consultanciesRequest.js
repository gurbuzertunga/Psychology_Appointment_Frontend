/* eslint-disable */
import axios from 'axios';
import { connect } from 'react-redux';
import { BASE, CONSULTANCIES } from '../services/appointmentapi';

const consultancyRequest = async createConsultanciesList => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2OCwiZXhwIjoxNjIwMTU2MDM4fQ.9FM5ZK1q9A9Pr9ksbDbfQp4pLRxEWoXvfeGhEyZlPZg',
    },
  };
  const response = await fetch(`${BASE}${CONSULTANCIES}`, options);
  const data = await response.json();
  try {
    createConsultanciesList(data);
  } catch (error) {
    createConsultanciesList(data);
  }
};

export default consultancyRequest;
