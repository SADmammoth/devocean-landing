import React from 'react';

import RichText from './RichText';

import PropTypes from 'prop-types';

function Description({ description }) {
  return (
    <section>
      <RichText text={description} />
    </section>
  );
}

Description.propTypes = {};

export default Description;
