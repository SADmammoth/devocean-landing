import React from 'react';

import Img from 'gatsby-image';

import Button from '../Button';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Callout.styles';
import RichText from '../RichText';
import RichTextAbstracts from '../RichTextAbstracts/RichTextAbstracts';

const useStyles = createUseStyles(styles);

function Callout({ calloutBackground, appLink, callout, appLinkContent }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section id="get-started" className={classes.section}>
      <div className={classes.background}>
        <Img
          fluid={calloutBackground.fluid}
          key={calloutBackground.fluid.src}
          alt={calloutBackground.title}
        />
      </div>
      <div className={classes.content}>
        <RichTextAbstracts
          type="big"
          className={classes.callout}
          text={callout}
        />
        <Button
          className={classes.appLink}
          size="fluid"
          link={'http://localhost:8000'}
          external>
          {appLinkContent}
        </Button>
      </div>
    </section>
  );
}

Callout.propTypes = {};

export default Callout;
