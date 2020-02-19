"use strict";

exports.__esModule = true;
exports.style = void 0;

var _styledSystem = require("../../styled-system");

// v4 style API shim
var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = (0, _styledSystem.createStyleFunction)({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = (0, _styledSystem.createParser)(config);
  return parse;
};

exports.style = style;