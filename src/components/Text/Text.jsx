import React, { useEffect } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import alignments from './alignments';
import types from './types';

import styles from './Text.styles';

const useStyles = createUseStyles(styles);

const Text = React.forwardRef(
  (
    {
      type,
      as,
      children,
      className,
      bold,
      italic,
      alignment,
      ellipsis,
      lines,
      alignX,
      alignY,
      ...props
    },

    ref,
  ) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const TextTag = as || types[type];

    return (
      <TextTag
        ref={ref}
        className={classNames(
          classes.text,
          classes[type],
          className,
          classes[alignments[alignment] + '-alignment'],
          {
            [classes.bold]: bold,
            [classes.italic]: italic,
            [classes.ellipsis]: ellipsis || !!lines,
          },
        )}
        style={{ '--lines': lines }}
        {...props}>
        {children}
      </TextTag>
    );
  },
);

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  alignment: PropTypes.oneOf(Object.keys(alignments)),
  ellipsis: PropTypes.bool,
  lines: PropTypes.number,
};

Text.displayName = 'Text';

export default Text;
