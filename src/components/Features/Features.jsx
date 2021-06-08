import React from 'react';

import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Features.styles';
import Feature from './Feature';

const useStyles = createUseStyles(styles);

function Features({ featuresImage, features }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section className={classes.section}>
      <div className={classes.imageContainer}>
        {!featuresImage || (
          <Img
            className={classes.image}
            fluid={featuresImage.fluid}
            key={featuresImage.fluid.src}
            style={{
              width: featuresImage.fluid.aspectRatio * 45 + 'vh',
              height: '45vh',
            }}
            alt={featuresImage.title}
          />
        )}
      </div>
      <div className={classes.features}>
        {features.map(({ name, description }) => (
          <Feature classes={classes} name={name} description={description} />
        ))}
      </div>
    </section>
  );
}

Features.propTypes = {};

export default Features;
