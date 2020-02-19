"use strict";

exports.__esModule = true;
exports["default"] = exports.typography = void 0;

var _core = require("../core");

var defaultScale = [12, 14, 16, 20, 24, 32, 48, 64, 72];
var typography = (0, _core.system)({
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaultScale
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
});
exports.typography = typography;
var _default = typography;
exports["default"] = _default;