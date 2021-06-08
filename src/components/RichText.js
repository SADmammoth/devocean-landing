import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

function RichText({ className, text }) {
  return (
    <Text
      type="common"
      className={className}
      dangerouslySetInnerHTML={{
        __html: text.childMarkdownRemark.html,
      }}></Text>
  );
}

RichText.propTypes = {};

export default RichText;
