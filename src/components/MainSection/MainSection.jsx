import React from 'react';

import Button from '../Button';

import Header from '../Header';

import imagesStyles from './imagesStyles';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './MainSection.styles';

import Img from 'gatsby-image';
import Text from '../Text';

const useStyles = createUseStyles(styles);

function MainSection({
  langs,
  langKey,
  logo,
  moto,
  mainImageLayers,
  appLinkContent,
  appLink,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(appLinkContent);
  return (
    <section id="home" className={classes.mainSection}>
      <div className={classes.content}>
        <Header
          navItems={[
            {
              link: '/' + langKey + '#about',
              label: 'About',
            },
            {
              link: '/' + langKey + '#aspects',
              label: 'Aspects',
            },
            {
              link: '/' + langKey + '#features',
              label: 'Features',
            },
          ]}
          langs={langs}
        />
        <div className={classes.branding}>
          <img className={classes.logo} src={logo?.file?.url} />
          <Text type="common" as="h1" className={classes.moto}>
            {moto}
          </Text>
        </div>
        <Button
          className={classes.appLink}
          size="fluid"
          link={appLink}
          external>
          {appLinkContent}
        </Button>
      </div>
      {mainImageLayers.map(({ fluid, title }, index) => {
        return (
          <Img
            fluid={fluid}
            key={fluid.src}
            alt={title}
            style={imagesStyles[title](fluid)}
          />
        );
      })}
    </section>
  );
}

MainSection.propTypes = {};

export default MainSection;
