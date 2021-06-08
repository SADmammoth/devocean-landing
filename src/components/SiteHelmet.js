import React from 'react';

import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

function SiteHelmet({ title, description, keyWords, favicon, ogImage }) {
  return (
    <Helmet
      title={title}
      meta={[
        { property: 'og:image', content: ogImage.file.url },
        { name: 'description', content: description.childMarkdownRemark.html },
        { name: 'keywords', content: keyWords.join(',') },
      ]}
      link={[{ rel: 'icon', type: 'image/svg', href: favicon.file.url }]}
    />
  );
}

SiteHelmet.propTypes = {};

export default SiteHelmet;
