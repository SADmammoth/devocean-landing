import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Features.styles';
import Feature from './Feature';

const useStyles = createUseStyles(styles);

function Features({ features }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section style={{ display: 'flex' }}>
      {features.map(({ name, description }) => (
        <Feature classes={classes} name={name} description={description} />
      ))}
    </section>
  );
}

Features.propTypes = {};

export default Features;
