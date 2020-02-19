import { get, system, compose } from '../core';

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const isNumber = n => typeof n === 'number' && !isNaN(n);

const getMargin = (n, scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }
  return value * (isNegative ? -1 : 1);
};

const _margin = {
  property: 'margin',
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const marginTop = {
  property: 'marginTop',
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const marginRight = {
  property: 'marginRight',
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const marginBottom = {
  property: 'marginBottom',
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const marginLeft = {
  property: 'marginLeft',
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const marginX = {
  properties: ['marginLeft', 'marginRight'],
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const marginY = {
  properties: ['marginTop', 'marginBottom'],
  scale: 'space',
  transform: getMargin,
  defaultScale
};

const _padding = {
  property: 'padding',
  scale: 'space',
  defaultScale
};

const paddingTop = {
  property: 'paddingTop',
  scale: 'space',
  defaultScale
};

const paddingRight = {
  property: 'paddingRight',
  scale: 'space',
  defaultScale
};

const paddingBottom = {
  property: 'paddingBottom',
  scale: 'space',
  defaultScale
};

const paddingLeft = {
  property: 'paddingLeft',
  scale: 'space',
  defaultScale
};

const paddingX = {
  properties: ['paddingLeft', 'paddingRight'],
  scale: 'space',
  defaultScale
};

const paddingY = {
  properties: ['paddingTop', 'paddingBottom'],
  scale: 'space',
  defaultScale
};

export const margin = system({
  margin: _margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  // aliases
  m: _margin,
  mt: marginTop,
  mr: marginRight,
  mb: marginBottom,
  ml: marginLeft,
  mx: marginX,
  my: marginY
});
export const padding = system({
  padding: _padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  // aliases
  p: _padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingX,
  py: paddingY
});
export const space = compose(margin, padding);

export default space;
