import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import sizes from './sizes';
import Link from 'gatsby-link';

import styles from './Button.styles';
import Text from '../Text';

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
      <Text
        type="common"
        as="a"
        href={link}
        type={type}
        className={classNames(className, classes.button, classes[sizes[size]])}
        aria-label={label}
        {...props}>
        {children}
      </Text>
    );
  }
  if (link) {
    return (
      <Text
        type="common"
        as={Link}
        to={link}
        type={type}
        className={classNames(className, classes.button, classes[sizes[size]])}
        aria-label={label}
        {...props}>
        {children}
      </Text>
    );
  }

  return (
    <Text
      type="common"
      as="button"
      type={type}
      className={classNames(className, classes.button, classes[sizes[size]])}
      onClick={onClick}
      aria-label={label}
      {...props}>
      {children}
    </Text>
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
