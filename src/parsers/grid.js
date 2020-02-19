import { system } from '../core';

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const grid = system({
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale
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
