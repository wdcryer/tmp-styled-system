import { system } from '../core';
var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export var position = system({
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaultScale
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaultScale
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaultScale
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaultScale
  }
});
export default position;