import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

class IndexPage extends React.Component {
  render() {
    var edges = [];
    if (this.props.data?.ru !== null) {
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
          ...allData
        }
      }
    }
  }
`;
