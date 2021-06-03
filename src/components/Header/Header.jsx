import React from 'react';

import SelectLanguage from '../SelectLanguage';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Header.styles';
import NavItems from '../NavItems';

const useStyles = createUseStyles(styles);

function Header({ navItems, langs }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <header className={classes.header}>
      <NavItems items={navItems} />
      <SelectLanguage className={classes.lang} langs={langs} />
    </header>
  );
}

Header.propTypes = {};

export default Header;
