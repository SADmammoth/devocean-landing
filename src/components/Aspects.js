import React from 'react';

import Aspect from './Aspect';

import PropTypes from 'prop-types';

function Aspects({ aspects }) {
  return (
    <section style={{ display: 'flex' }}>
      {aspects.map(({ name, description }) => (
        <Aspect name={name} description={description} />
      ))}
    </section>
  );
}

Aspects.propTypes = {};

export default Aspects;
