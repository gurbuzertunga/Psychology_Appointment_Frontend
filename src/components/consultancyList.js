/* eslint-disable */
import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import consultancyRequest from '../requests/consultanciesRequest';
import { createConsultanciesList } from '../actions/index';

const ConsultancyList = ({ createConsultanciesList }) => {
  consultancyRequest(createConsultanciesList);
  const consultancies = useSelector(state => state.consultanciesReducer.consultancies);
  console.log(consultancies);
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

export default connect(null, { createConsultanciesList })(ConsultancyList);
