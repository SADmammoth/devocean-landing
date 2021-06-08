const styles = {
  '@global': {
    overflowY: 'hidden',
  },
  layout: {
    overflowY: 'scroll',
    scrollSnapType: 'y proximity',
    height: '100vh',
    '&>*': {
      scrollSnapAlign: 'start',
    },
  },
};

export default styles;
