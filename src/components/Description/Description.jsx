import React from 'react';

import imagesStyles from './imagesStyles';

import Img from 'gatsby-image';

import RichText from '../RichText';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import styles from './Description.styles';
import RichTextAbstracts from '../RichTextAbstracts/RichTextAbstracts';

const useStyles = createUseStyles(styles);

function Description({ description, descriptionImages }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [compass, todo] = descriptionImages;

  return (
    <section className={classes.section}>
      <Img
        fluid={compass.fluid}
        key={compass.fluid.src}
        alt={compass.title}
        style={imagesStyles.compass(compass.fluid)}
      />
      <RichTextAbstracts
        className={classes.abstracts}
        abstractClassName={classes.text}
        text={description}
      />
      <Img
        fluid={todo.fluid}
        key={todo.fluid.src}
        alt={todo.title}
        style={imagesStyles.todo(todo.fluid)}
      />
    </section>
  );
}

Description.propTypes = {};

export default Description;
