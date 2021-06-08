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
    <section style={{ display: 'flex' }}>
      {aspects.map(({ name, description }) => (
        <Aspect classes={classes} name={name} description={description} />
      ))}
    </section>
  );
}

Aspects.propTypes = {};

export default Aspects;
