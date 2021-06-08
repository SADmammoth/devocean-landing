import React from 'react';

import RichText from '../RichText';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Description.styles';

const useStyles = createUseStyles(styles);

function Description({ description }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section>
      <RichText text={description} />
    </section>
  );
}

Description.propTypes = {};

export default Description;
