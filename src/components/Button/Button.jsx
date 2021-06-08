import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import sizes from './sizes';
import Link from 'gatsby-link';

import styles from './Button.styles';

const useStyles = createUseStyles(styles);

const Button = ({
  className,
  type,
  onClick,
  link,
  children,
  size,
  label,
  props,
  external,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (link && external) {
    return (
      <a
        href={link}
        type={type}
        className={classNames(className, classes.button, classes[sizes[size]])}
        aria-label={label}
        {...props}>
        {children}
      </a>
    );
  }
  if (link) {
    return (
      <Link
        to={link}
        type={type}
        className={classNames(className, classes.button, classes[sizes[size]])}
        aria-label={label}
        {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(className, classes.button, classes[sizes[size]])}
      onClick={onClick}
      aria-label={label}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Button.defaultProps = {
  size: 'common',
};

export default Button;
