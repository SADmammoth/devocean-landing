import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './RichTextAbstracts.styles';
import Text from '../Text';

const useStyles = createUseStyles(styles);

function RichTextAbstracts({ className, abstractClassName, text }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={className}>
      {text.childMarkdownRemark.html.split('\n').map((abstract) => (
        <Text
          type="common"
          className={abstractClassName}
          dangerouslySetInnerHTML={{ __html: abstract }}></Text>
      ))}
    </div>
  );
}

RichTextAbstracts.propTypes = {};

export default RichTextAbstracts;