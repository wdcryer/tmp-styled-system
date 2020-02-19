import { get, createParser } from './core';
import css from './css';
export var variant = function variant(_ref) {
  var _createParser;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return css(get(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return get(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  return createParser((_createParser = {}, _createParser[prop] = sx, _createParser));
};
export default variant;
export var buttonStyle = variant({
  key: 'buttons'
});
export var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
export var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});