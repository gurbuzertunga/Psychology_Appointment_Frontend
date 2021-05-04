/* eslint-disable */
import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import consultancyRequest from '../requests/consultanciesRequest';
import { createConsultanciesList } from '../actions/index';

class ConsultancyList extends Component {
  componentDidMount() {
    consultancyRequest(this.props.createConsultanciesList);
  }
  render() {
    const { consultancies } = this.props;
    console.log(consultancies);
    return (
      <ul>
        {
          consultancies && consultancies.map(consultancy => (
            <li key={consultancy.id}>{consultancy.area}</li>
          ))
        }
      </ul>
    );
  }
}
ConsultancyList.propTypes = {
  createConsultanciesList: PropTypes.func,
};
ConsultancyList.defaultProps = {
  createConsultanciesList,
};

const mapStateToProps = state => {
  return {
    consultancies: state.consultanciesReducer.consultancies,
  };
};

export default connect(mapStateToProps, { createConsultanciesList })(ConsultancyList);
