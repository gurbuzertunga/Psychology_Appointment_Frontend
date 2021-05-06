import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Consultancy = ({ consultancy, handleClick, history }) => {
  const { id, area } = consultancy;
  const clickEffect = id => {
    handleClick();
    history.push(`/consultancies/${id}`);
  };

  return (
    <div onClick={() => clickEffect(id)} onKeyPress={() => clickEffect(id)} role="presentation">
      <h4>{area}</h4>
    </div>
  );
};

Consultancy.propTypes = {
  consultancy: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withRouter(Consultancy);
