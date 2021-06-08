import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import Text from './Text';

function RichText({ className, text, ...props }) {
  return (
    <Text type="common" className={className} {...props}>
      {ReactHtmlParser(text.childMarkdownRemark.html)}
    </Text>
  );
}

RichText.propTypes = {};

export default RichText;
