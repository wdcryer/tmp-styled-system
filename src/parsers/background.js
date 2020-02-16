import { system } from '../core'

const backgroundImage = true;
const backgroundSize = true;
const backgroundPosition = true;
const backgroundRepeat = true;

export const background = system({
  background: true,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // alias
  bgImage: backgroundImage,
  bgSize: backgroundSize,
  bgPosition: backgroundPosition,
  bgRepeat: backgroundRepeat,
})

export default background
