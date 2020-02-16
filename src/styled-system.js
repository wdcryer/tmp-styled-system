import { createStyleFunction, createParser } from './core'
// v4 api shims
import layout from './parsers/layout'
import color from './parsers/color'
import typography from './parsers/typography'
import flexbox from './parsers/flexbox'
import grid from './parsers/grid'
import border from './parsers/border'
import background from './parsers/background'
import position from './parsers/position'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from './core'

export { margin, padding, space } from './parsers/space'
export { color } from './parsers/color'
export { layout } from './parsers/layout'
export { typography } from './parsers/typography'
export { flexbox } from './parsers/flexbox'
export { border } from './parsers/border'
export { background } from './parsers/background'
export { position } from './parsers/position'
export { grid } from './parsers/grid'
export { shadow } from './parsers/shadow'
export {
  default as boxShadow,
  default as textShadow,
} from './parsers/shadow'

export {
  variant,
  buttonStyle,
  textStyle,
  colorStyle,
} from './variant'

export { default as css } from './css'
export { default as propTypes, propType } from './prop-types'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const { zIndex, top, right, bottom, left } = position

export { default as borders } from './parsers/border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
}
