import alignments from './alignments';
import { scale } from '../../utils/typography';

const alignmentStyles = Object.fromEntries(
  Object.entries(alignments).map(([key, value]) => [
    key + '-alignment',
    {
      textAlign: value,
    },
  ]),
);

const styles = {
  text: {
    margin: 0,
    padding: 0,
    fontFamily: 'SF Pro Display',
  },
  common: {
    ...scale(1),
  },
  h1: {
    ...scale(2),
  },
  h1Small: {
    ...scale(1.47),
  },
  h2: {
    ...scale(1.47),
  },
  h3: {
    ...scale(1.36),
  },
  h4: {
    ...scale(1.36),
  },
  sub: {
    ...scale(1.47),
  },
  subSmall: {
    ...scale(1),
  },
  hint: {
    ...scale(0.74),
  },
  small: {
    ...scale(0.84),
  },
  navitem: {
    ...scale(0.84),
  },
  big: {
    ...scale(1.36),
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },

  ellipsis: {
    margin: 0,
    lineClamp: 'var(--lines, 1)',
    display: '-webkit-box',
    boxOrient: 'vertical',
    overflow: 'hidden',
  },

  ...alignmentStyles,
};

export default styles;
