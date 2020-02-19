import { system } from '../core';
var backgroundImage = true;
var backgroundSize = true;
var backgroundPosition = true;
var backgroundRepeat = true;
export var background = system({
  background: true,
  backgroundImage: backgroundImage,
  backgroundSize: backgroundSize,
  backgroundPosition: backgroundPosition,
  backgroundRepeat: backgroundRepeat,
  // alias
  bgImage: backgroundImage,
  bgSize: backgroundSize,
  bgPosition: backgroundPosition,
  bgRepeat: backgroundRepeat
});
export default background;