import React from 'react';

import Button from '../Button';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Callout.styles';
import RichText from '../RichText';

const useStyles = createUseStyles(styles);

function Callout({ appLink, callout, appLinkContent }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section id="#get-started">
      <RichText text={callout} />
      <Button to={appLink}>{appLinkContent}</Button>
    </section>
  );
}

Callout.propTypes = {};

export default Callout;
