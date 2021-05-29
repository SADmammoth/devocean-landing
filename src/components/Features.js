import React from 'react';

import Feature from './Feature';

import PropTypes from 'prop-types';

function Features({ features }) {
  return (
    <section style={{ display: 'flex' }}>
      {features.map(({ name, description }) => (
        <Feature name={name} description={description} />
      ))}
    </section>
  );
}

Features.propTypes = {};

export default Features;
