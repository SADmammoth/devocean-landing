const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    height: '80vh',
  },
  aspect: {
    width: '20vw',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3vw',
    '&::first-child': {
      marginLeft: 0,
    },
  },
  image: {
    width: '20vw',
  },
};

export default styles;
