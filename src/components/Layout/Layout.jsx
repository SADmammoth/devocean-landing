import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Layout.styles';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import MainSection from '../MainSection';
import Description from '../Description';
import Features from '../Features';
import Aspects from '../Aspects';
import Callout from '../Callout';
import SiteHelmet from '../SiteHelmet';

import 'intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import ru from 'react-intl/locale-data/ru';
import 'intl/locale-data/jsonp/de';

import 'normalize.css';

// add concatenated locale data
addLocaleData([...en, ...ru]);

const useStyles = createUseStyles(styles);

function Layout(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const {
    children,
    data,
    content,
    location: { pathname: url },
  } = props;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  // get the appropriate message file based on langKey
  // at the moment this assumes that langKey will provide us
  // with the appropriate language code
  const i18nMessages = require(`../../data/messages/${langKey}`);

  console.log(content, content.appLinkContent);
  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div className={classes.layout}>
        <SiteHelmet
          title={content.siteName}
          keyWords={content.keyWords}
          description={content.siteDescription}
          favicon={content.favicon}
          ogImage={content.ogImage}
        />
        <MainSection
          langs={langsMenu}
          langKey={langKey}
          logo={content.logo}
          moto={content.moto}
          mainImageLayers={content.mainImageLayers}
          appLinkContent={content.appLinkContent}
          appLink={content.appLink}
        />
        <Description
          description={content.description}
          descriptionImages={content.descriptionImages}
        />
        <Aspects aspects={content.aspects} />
        <Features
          featuresImage={content.featuresImage}
          features={content.features}
        />
        <Callout
          calloutBackground={content.calloutBackground}
          appLink={content.appLink}
          callout={content.callout}
          appLinkContent={content.appLinkContent}
          appLink={content.appLink}
        />
        {children}
      </div>
    </IntlProvider>
  );
}

Layout.propTypes = {};

export default Layout;
