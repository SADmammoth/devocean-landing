import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './SiteContainer.styles';

const useStyles = createUseStyles(styles);

function SiteContainer({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <main className={classes.siteContainer}>{children}</main>;
}

SiteContainer.propTypes = {};

export default SiteContainer;
