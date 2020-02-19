"use strict";

exports.__esModule = true;
exports["default"] = exports.grid = void 0;

var _core = require("../core");

var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var grid = (0, _core.system)({
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaultScale
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaultScale
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaultScale
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
});
exports.grid = grid;
var _default = grid;
exports["default"] = _default;