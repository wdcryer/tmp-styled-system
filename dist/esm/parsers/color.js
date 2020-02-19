import { system } from '../core';
var backgroundColor = {
  property: 'backgroundColor',
  scale: 'colors'
};
export var color = system({
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: backgroundColor,
  opacity: true,
  // alias
  bg: backgroundColor
});
export default color;