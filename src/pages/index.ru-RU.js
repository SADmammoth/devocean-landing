import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout';

class IndexPage extends React.Component {
  render() {
    var edges = [];
    if (this.props.data.ru !== null) {
      edges = this.props.data.ru.edges;
    }
    return (
      <Layout
        data={this.props.data}
        content={edges[0].node}
        location={this.props.location}
      />
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query PageDeQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    ru: allContentfulLandingPage(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          contentful_id
          node_locale
          siteName
          moto
          callout: childContentfulLandingPageCalloutTextNode {
            childMarkdownRemark {
              html
            }
          }
          siteDescription {
            siteDescription
          }
          description: childContentfulLandingPageDescriptionTextNode {
            childMarkdownRemark {
              html
            }
          }
          features {
            name
            description {
              childMarkdownRemark {
                html
              }
            }
          }
          aspects {
            name
            description {
              childMarkdownRemark {
                html
              }
            }
          }
          appLinkContent
        }
      }
    }
  }
`;
