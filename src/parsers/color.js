import { system } from '../core';

const backgroundColor = {
  property: 'backgroundColor',
  scale: 'colors'
};

export const color = system({
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor,
  opacity: true,
  // alias
  bg: backgroundColor
});
export default color;
