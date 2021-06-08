import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';
import { Link } from 'gatsby';

function Callout({ appLink, callout, appLinkContent }) {
  return (
    <section id="#get-started">
      <RichText text={callout} />
      <Link to={appLink}>{appLinkContent}</Link>
    </section>
  );
}

Callout.propTypes = {};

export default Callout;
