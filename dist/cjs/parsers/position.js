"use strict";

exports.__esModule = true;
exports["default"] = exports.position = void 0;

var _core = require("../core");

var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var position = (0, _core.system)({
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaultScale
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaultScale
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaultScale
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaultScale
  }
});
exports.position = position;
var _default = position;
exports["default"] = _default;