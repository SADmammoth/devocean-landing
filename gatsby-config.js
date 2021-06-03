const languages = require('./src/data/languages');
const theme = require('./src/theme/theme');

module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g8yquz7s5gui`,
        accessToken: `1_FUcrWXVbZ4LxUcLY6JT9IpMqA1X8m3mLnLCRNSLSI`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme },
    },
  ],
};
