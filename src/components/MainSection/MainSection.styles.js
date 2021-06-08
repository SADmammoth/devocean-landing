const styles = {
  mainSection: {
    position: 'relative',
    height: '99vh',
  },
  content: {
    position: 'absolute',
    zIndex: 102,
    height: '100%',
    width: '45%',
    background: (theme) => theme.background.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5vh 0 20vh 0',
    textAlign: 'center',
    color: (theme) => theme.text.common,
  },
  logo: {
    width: '100%',
    marginLeft: '-30px',
  },
  branding: {
    width: '40%',
  },
  moto: {
    fontSize: '1.1rem',
    fontWeight: 'normal',
  },
};

export default styles;
