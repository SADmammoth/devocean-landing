import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import ReactHtmlParser from 'react-html-parser';

import styles from './RichTextAbstracts.styles';
import Text from '../Text';

const useStyles = createUseStyles(styles);

function RichTextAbstracts({ type, className, abstractClassName, text }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={className}>
      {text.childMarkdownRemark.html.split('\n').map((abstract) => (
        <Text type={type || 'common'} className={abstractClassName}>
          {ReactHtmlParser(abstract)}
        </Text>
      ))}
    </div>
  );
}

RichTextAbstracts.propTypes = {};

export default RichTextAbstracts;
