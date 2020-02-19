import { system } from '../core';
var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export var grid = system({
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaultScale
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaultScale
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaultScale
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
});
export default grid;