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
    ogImage {
      file {
        url
      }
    }
    mainImageLayers {
      title
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
      }
    }
    descriptionImages {
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
    siteDescription: childContentfulLandingPageSiteDescriptionTextNode {
      childMarkdownRemark {
        rawMarkdownBody
      }
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
      image {
        title
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
        }
      }
      name
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    appLinkContent
    appLink
    featuresImage {
      title
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
      }
    }
    calloutBackground {
      title
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
      }
    }
    keyWords
  }
`;
