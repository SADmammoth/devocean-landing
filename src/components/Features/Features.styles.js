const styles = {
  section: {
    display: 'flex',
    background: (theme) => theme.background.common,
    height: '60vh',
    alignItems: 'center',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10vw',
  },
  feature: {
    width: '40vw',
    marginBottom: '2vh',
    '&:last-child': {
      marginBottom: 0,
    },
    '&:nth-child': {
      marginLeft: '20vw',
    },
  },
  imageContainer: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    transform: 'scaleX(-1)',
  },
};

export default styles;
