const styles = {
  section: {
    height: '40vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderColor: (theme) => theme.background.common,
    borderTop: '10px solid',
    borderBottom: '10px solid',
  },
  text: {
    width: '60vw',
    position: 'relative',
    '&:first-child': {
      left: '10vw',
      marginBottom: '2vh',
    },
    '&:last-child': {
      right: '5vw',
    },
  },
};

export default styles;
