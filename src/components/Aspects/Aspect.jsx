import React from 'react';

import RichText from '../RichText';

import PropTypes from 'prop-types';

function Aspect({ name, description }) {
  return (
    <article>
      <header>
        <h3>{name}</h3>
      </header>
      <RichText text={description} />
    </article>
  );
}

Aspect.propTypes = {};

export default Aspect;
