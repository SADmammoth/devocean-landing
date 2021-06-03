import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const propTypes = {
  data: PropTypes.object.isRequired,
};

class IndexPage extends React.Component {
  render() {
    const edges = this.props.data?.us?.edges || [];

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
          ...allData
        }
      }
    }
  }
`;
