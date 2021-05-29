import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout';

const propTypes = {
  data: PropTypes.object.isRequired,
};

class IndexPage extends React.Component {
  render() {
    const edges = this.props.data.us.edges;

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
  query PageEnUsQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    us: allContentfulLandingPage(filter: { node_locale: { eq: "en-US" } }) {
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
