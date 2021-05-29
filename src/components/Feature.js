import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Feature({ name, description }) {
  return (
    <article>
      <header>
        <h3>{name}</h3>
      </header>
      <RichText text={description} />
    </article>
  );
}

Feature.propTypes = {};

export default Feature;
