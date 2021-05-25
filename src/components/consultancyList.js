import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import consultancyRequest from '../requests/consultanciesRequest';
import { createConsultanciesList } from '../actions/index';
import Consultancy from './consultancy';

AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
});
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
      <div data-aos="fade-down" className="bg-transparent border border-gray-300 p-4 rounded">
        {
          consultancies && consultancies.map(consultancy => (
            <Consultancy key={consultancy.id} consultancy={consultancy} handleClick={handleClick} />
          ))
        }
      </div>
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
