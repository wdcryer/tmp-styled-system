import { system } from '../core';

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const position = system({
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale
  }
});

export default position;
