import React from 'react';

import Button from '../Button';

import Header from '../Header';

import imagesStyles from './imagesStyles';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './MainSection.styles';

import Img from 'gatsby-image';

const useStyles = createUseStyles(styles);

function MainSection({ langs, logo, moto, mainImageLayers, appLinkContent }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(appLinkContent);
  return (
    <section id="home" className={classes.mainSection}>
      <div className={classes.content}>
        <Header
          navItems={[
            {
              link: '#about',
              label: 'About',
            },
            {
              link: '#aspects',
              label: 'Aspects',
            },
            {
              link: '#features',
              label: 'Features',
            },
          ]}
          langs={langs}
        />
        <div className={classes.branding}>
          <img className={classes.logo} src={logo?.file?.url} />
          <h1 className={classes.moto}>{moto}</h1>
        </div>
        <Button size="fluid" link="#get-started">
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
