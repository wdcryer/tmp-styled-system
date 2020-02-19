import { createStyleFunction, createParser } from './core'; // v4 api shims

import layout from './parsers/layout';
import color from './parsers/color';
import typography from './parsers/typography';
import flexbox from './parsers/flexbox';
import grid from './parsers/grid';
import border from './parsers/border';
import background from './parsers/background';
import position from './parsers/position';
export { get, createParser, createStyleFunction, compose, system } from './core';
export { margin, padding, space } from './parsers/space';
export { color } from './parsers/color';
export { layout } from './parsers/layout';
export { typography } from './parsers/typography';
export { flexbox } from './parsers/flexbox';
export { border } from './parsers/border';
export { background } from './parsers/background';
export { position } from './parsers/position';
export { grid } from './parsers/grid';
export { shadow } from './parsers/shadow';
export { default as boxShadow, default as textShadow } from './parsers/shadow';
export { variant, buttonStyle, textStyle, colorStyle } from './variant';
export { default as css } from './css';
export { default as propTypes, propType } from './prop-types';
var width = layout.width,
    height = layout.height,
    minWidth = layout.minWidth,
    minHeight = layout.minHeight,
    maxWidth = layout.maxWidth,
    maxHeight = layout.maxHeight,
    size = layout.size,
    verticalAlign = layout.verticalAlign,
    display = layout.display,
    overflow = layout.overflow,
    overflowX = layout.overflowX,
    overflowY = layout.overflowY;
var opacity = color.opacity;
var fontSize = typography.fontSize,
    fontFamily = typography.fontFamily,
    fontWeight = typography.fontWeight,
    lineHeight = typography.lineHeight,
    textAlign = typography.textAlign,
    fontStyle = typography.fontStyle,
    letterSpacing = typography.letterSpacing;
var alignItems = flexbox.alignItems,
    alignContent = flexbox.alignContent,
    justifyItems = flexbox.justifyItems,
    justifyContent = flexbox.justifyContent,
    flexWrap = flexbox.flexWrap,
    flexDirection = flexbox.flexDirection,
    flex = flexbox.flex,
    flexGrow = flexbox.flexGrow,
    flexShrink = flexbox.flexShrink,
    flexBasis = flexbox.flexBasis,
    justifySelf = flexbox.justifySelf,
    alignSelf = flexbox.alignSelf,
    order = flexbox.order;
var gridGap = grid.gridGap,
    gridColumnGap = grid.gridColumnGap,
    gridRowGap = grid.gridRowGap,
    gridColumn = grid.gridColumn,
    gridRow = grid.gridRow,
    gridAutoFlow = grid.gridAutoFlow,
    gridAutoColumns = grid.gridAutoColumns,
    gridAutoRows = grid.gridAutoRows,
    gridTemplateColumns = grid.gridTemplateColumns,
    gridTemplateRows = grid.gridTemplateRows,
    gridTemplateAreas = grid.gridTemplateAreas,
    gridArea = grid.gridArea;
var borderWidth = border.borderWidth,
    borderStyle = border.borderStyle,
    borderColor = border.borderColor,
    borderTop = border.borderTop,
    borderRight = border.borderRight,
    borderBottom = border.borderBottom,
    borderLeft = border.borderLeft,
    borderRadius = border.borderRadius;
var backgroundImage = background.backgroundImage,
    backgroundSize = background.backgroundSize,
    backgroundPosition = background.backgroundPosition,
    backgroundRepeat = background.backgroundRepeat;
var zIndex = position.zIndex,
    top = position.top,
    right = position.right,
    bottom = position.bottom,
    left = position.left;
export { default as borders } from './parsers/border';
export { width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, overflowX, overflowY // color
, opacity // typography
, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing // flexbox
, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order // grid
, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea // border
, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius // background
, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat // position
, zIndex, top, right, bottom, left };