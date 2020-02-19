import { get, system, compose } from '../core';
var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var _margin = {
  property: 'margin',
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var marginTop = {
  property: 'marginTop',
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var marginRight = {
  property: 'marginRight',
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var marginBottom = {
  property: 'marginBottom',
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var marginLeft = {
  property: 'marginLeft',
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var marginX = {
  properties: ['marginLeft', 'marginRight'],
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var marginY = {
  properties: ['marginTop', 'marginBottom'],
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale
};
var _padding = {
  property: 'padding',
  scale: 'space',
  defaultScale: defaultScale
};
var paddingTop = {
  property: 'paddingTop',
  scale: 'space',
  defaultScale: defaultScale
};
var paddingRight = {
  property: 'paddingRight',
  scale: 'space',
  defaultScale: defaultScale
};
var paddingBottom = {
  property: 'paddingBottom',
  scale: 'space',
  defaultScale: defaultScale
};
var paddingLeft = {
  property: 'paddingLeft',
  scale: 'space',
  defaultScale: defaultScale
};
var paddingX = {
  properties: ['paddingLeft', 'paddingRight'],
  scale: 'space',
  defaultScale: defaultScale
};
var paddingY = {
  properties: ['paddingTop', 'paddingBottom'],
  scale: 'space',
  defaultScale: defaultScale
};
export var margin = system({
  margin: _margin,
  marginTop: marginTop,
  marginRight: marginRight,
  marginBottom: marginBottom,
  marginLeft: marginLeft,
  marginX: marginX,
  marginY: marginY,
  // aliases
  m: _margin,
  mt: marginTop,
  mr: marginRight,
  mb: marginBottom,
  ml: marginLeft,
  mx: marginX,
  my: marginY
});
export var padding = system({
  padding: _padding,
  paddingTop: paddingTop,
  paddingRight: paddingRight,
  paddingBottom: paddingBottom,
  paddingLeft: paddingLeft,
  paddingX: paddingX,
  paddingY: paddingY,
  // aliases
  p: _padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingX,
  py: paddingY
});
export var space = compose(margin, padding);
export default space;