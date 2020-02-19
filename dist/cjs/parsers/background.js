"use strict";

exports.__esModule = true;
exports["default"] = exports.background = void 0;

var _core = require("../core");

var backgroundImage = true;
var backgroundSize = true;
var backgroundPosition = true;
var backgroundRepeat = true;
var background = (0, _core.system)({
  background: true,
  backgroundImage: backgroundImage,
  backgroundSize: backgroundSize,
  backgroundPosition: backgroundPosition,
  backgroundRepeat: backgroundRepeat,
  // alias
  bgImage: backgroundImage,
  bgSize: backgroundSize,
  bgPosition: backgroundPosition,
  bgRepeat: backgroundRepeat
});
exports.background = background;
var _default = background;
exports["default"] = _default;