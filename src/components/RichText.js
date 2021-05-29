import React from 'react';
import PropTypes from 'prop-types';

function RichText({ text }) {
  return (
    <p dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }}></p>
  );
}

RichText.propTypes = {};

export default RichText;
