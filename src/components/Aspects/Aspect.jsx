import React from 'react';

import Img from 'gatsby-image';

import RichText from '../RichText';

import PropTypes from 'prop-types';

function Aspect({ classes, image, name, description }) {
  return (
    <article className={classes.aspect}>
      {!image || (
        <Img
          className={classes.image}
          fluid={image.fluid}
          key={image.fluid.src}
          alt={image.title}
        />
      )}
      <div>
        <header>
          <h3>{name}</h3>
        </header>
        <RichText text={description} />
      </div>
    </article>
  );
}

Aspect.propTypes = {};

export default Aspect;
