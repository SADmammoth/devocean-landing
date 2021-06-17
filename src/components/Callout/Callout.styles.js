const styles = {
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    zIndex: '-1',
  },
  section: {
    height: '70vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callout: {
    color: (theme) => theme.background.highlight,
    marginBottom: '2vh',
  },
  content: {
    width: '50vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  appLink: {},
};

export default styles;
