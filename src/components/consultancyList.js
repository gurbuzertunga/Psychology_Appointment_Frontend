/* eslint-disable */
import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import consultancyRequest from '../requests/consultanciesRequest';
import { createConsultanciesList } from '../actions/index';
import Consultancy from './consultancy';

class ConsultancyList extends Component {
  componentDidMount() {
    consultancyRequest(this.props.createConsultanciesList, this.props.auth);
  }

  static handleClick() {

  }
  render() {
    const { consultancies } = this.props;
    return (
      <ul>
        {
          consultancies && consultancies.map(consultancy => (
            <Consultancy key={consultancy.id} consultancy={consultancy} handleClick={this.props.handleClick} />
          ))
        }
      </ul>
    );
  }
}
ConsultancyList.propTypes = {
  createConsultanciesList: PropTypes.func,
  auth: PropTypes.string.isRequired,
};
ConsultancyList.defaultProps = {
  createConsultanciesList,
};

const mapStateToProps = state => {
  return {
    consultancies: state.consultanciesReducer.consultancies,
    auth: state.authenticationReducer.authToken,
  };
};

export default connect(mapStateToProps, { createConsultanciesList })(ConsultancyList);
