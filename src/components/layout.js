import React, { Component } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import { rhythm } from '../utils/typography';
import MainSection from './MainSection';
import Description from './Description';
import Features from './Features';
import Aspects from './Aspects';
import Callout from './Callout';

import 'intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import ru from 'react-intl/locale-data/ru';
import 'intl/locale-data/jsonp/de';

// add concatenated locale data
addLocaleData([...en, ...ru]);

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    const data = this.props.data;
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(
      langs,
      this.langKey,
      getUrlForLang(this.homeLink, url),
    );

    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../data/messages/${this.langKey}`);
  }
  render() {
    return (
      <IntlProvider locale={this.langKey} messages={this.i18nMessages}>
        <div>
          <Helmet
            title="Gatsby Default Starter"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header langs={this.langsMenu} />
          <MainSection
            siteName={this.props.content.siteName}
            moto={this.props.content.moto}
          />
          <Description description={this.props.content.description} />
          <Features features={this.props.content.features} />
          <Aspects aspects={this.props.content.aspects} />
          <Callout
            appLink={this.props.content.appLink}
            callout={this.props.content.callout}
            appLinkContent={this.props.content.appLinkContent}
          />
          {this.children}
        </div>
      </IntlProvider>
    );
  }
}

export default TemplateWrapper;
