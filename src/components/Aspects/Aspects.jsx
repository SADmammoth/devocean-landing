import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Aspects.styles';
import Aspect from './Aspect';

const useStyles = createUseStyles(styles);

function Aspects({ aspects }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section className={classes.section}>
      {aspects.map(({ image, name, description }) => (
        <Aspect
          classes={classes}
          image={image}
          name={name}
          description={description}
        />
      ))}
    </section>
  );
}

Aspects.propTypes = {};

export default Aspects;
