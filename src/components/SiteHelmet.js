import React from 'react';

import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

function SiteHelmet({ title, description, keyWords, favicon }) {
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keyWords.join(',') },
      ]}
      link={[{ rel: 'icon', type: 'image/svg', href: favicon.file.url }]}
    />
  );
}

SiteHelmet.propTypes = {};

export default SiteHelmet;
