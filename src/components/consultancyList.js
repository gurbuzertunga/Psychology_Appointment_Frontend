/* eslint-disable */
import React from 'react';
import consultancyRequest from '../requests/consultanciesRequest';
import PropTypes from 'prop-types';
import { createConsultanciesList } from '../actions/index';

const ConsultancyList = ({ createConsultanciesList }) => {
  consultancyRequest(createConsultanciesList);
  return (
    <ul>
      <li>my list</li>
    </ul>
  );
};

ConsultancyList.propTypes = {
  createConsultanciesList: PropTypes.func,
};
ConsultancyList.defaultProps = {
  createConsultanciesList,
};

export default ConsultancyList;
