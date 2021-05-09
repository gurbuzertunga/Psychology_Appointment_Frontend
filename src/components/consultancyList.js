import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import consultancyRequest from '../requests/consultanciesRequest';
import { createConsultanciesList } from '../actions/index';
import Consultancy from './consultancy';

class ConsultancyList extends Component {
  componentDidMount() {
    const { createConsultanciesList, auth } = this.props;
    consultancyRequest(createConsultanciesList, auth);
  }

  static handleClick() {

  }

  render() {
    const { consultancies, handleClick } = this.props;
    return (
      <ul>
        {
          consultancies && consultancies.map(consultancy => (
            <Consultancy key={consultancy.id} consultancy={consultancy} handleClick={handleClick} />
          ))
        }
      </ul>
    );
  }
}
ConsultancyList.propTypes = {
  createConsultanciesList: PropTypes.func,
  auth: PropTypes.string.isRequired,
  consultancies: PropTypes.arrayOf(Array),
  handleClick: PropTypes.func.isRequired,
};
ConsultancyList.defaultProps = {
  createConsultanciesList,
  consultancies: [],
};

const mapStateToProps = state => ({
  consultancies: state.consultanciesReducer.consultancies,
  auth: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps, { createConsultanciesList })(ConsultancyList);
