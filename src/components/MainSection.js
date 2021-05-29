import React from 'react';
import PropTypes from 'prop-types';

function MainSection({ siteName, moto, mainImage }) {
  return (
    <section>
      <h1>{siteName}</h1>
      <p>{moto}</p>
    </section>
  );
}

MainSection.propTypes = {};

export default MainSection;
