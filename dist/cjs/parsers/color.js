"use strict";

exports.__esModule = true;
exports["default"] = exports.color = void 0;

var _core = require("../core");

var backgroundColor = {
  property: 'backgroundColor',
  scale: 'colors'
};
var color = (0, _core.system)({
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: backgroundColor,
  opacity: true,
  // alias
  bg: backgroundColor
});
exports.color = color;
var _default = color;
exports["default"] = _default;