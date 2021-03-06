export default {
  Sky: (fluid) => ({
    position: 'absolute',
    zIndex: 101,
    height: '100%',
    width: '100%',
    boxSizing: 'borderBox',
  }),
  Ship: (fluid) => ({
    position: 'absolute',
    zIndex: 103,
    height: '60vh',
    width: 60 * fluid.aspectRatio + 'vh',
    left: '43%',
    bottom: '13vh',
  }),
  Whale: (fluid) => ({
    position: 'absolute',
    zIndex: 104,
    height: '15vh',
    width: 15 * fluid.aspectRatio + 'vh',
    bottom: '14vh',
    right: '2%',
  }),
  Waves: (fluid) => ({
    position: 'absolute',
    zIndex: 105,
    height: '18vh',
    objectPosition: 'right top',
    width: '55%',
    bottom: 0,
    right: 0,
    transform: 'scaleX(-1)',
  }),
};
