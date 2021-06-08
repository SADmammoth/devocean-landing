import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

function RichText({ className, text, ...props }) {
  return (
    <Text
      type="common"
      className={className}
      dangerouslySetInnerHTML={{
        __html: text.childMarkdownRemark.html,
      }}
      {...props}></Text>
  );
}

RichText.propTypes = {};

export default RichText;
