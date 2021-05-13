import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SiReplDotIt } from 'react-icons/si';

const Consultancy = ({ consultancy, handleClick, history }) => {
  const { id, area } = consultancy;
  const clickEffect = id => {
    handleClick();
    history.push(`/consultancies/${id}`);
  };

  return (
    <div onClick={() => clickEffect(id)} onKeyPress={() => clickEffect(id)} role="presentation">
      <h4 className="flex items-center text-white lg:text-base sm:text-4xl text-2xl font-light cursor-pointer">
        <SiReplDotIt className="mr-4 lg:text-base sm:text-4xl text-2xl text-white" />
        {area}
      </h4>
    </div>
  );
};

Consultancy.propTypes = {
  consultancy: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withRouter(Consultancy);
