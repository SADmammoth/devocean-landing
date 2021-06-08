import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText';
import Text from '../Text';

function Feature({ classes, name, description }) {
  return (
    <article className={classes.feature}>
      <header>
        <Text type="h3">{name}</Text>
      </header>
      <RichText text={description} />
    </article>
  );
}

Feature.propTypes = {};

export default Feature;
