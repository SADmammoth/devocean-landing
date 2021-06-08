export const query = graphql`
  fragment allData on ContentfulLandingPage {
    id
    logo {
      file {
        url
      }
    }
    favicon {
      file {
        url
      }
    }
    contentful_id
    node_locale
    siteName
    moto
    mainImageLayers {
      title
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
      }
    }
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
    appLink
  }
`;
