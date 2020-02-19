"use strict";

var _grid = _interopRequireDefault(require("../../parsers/grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns grid styles', function () {
  var style = (0, _grid["default"])({
    gridGap: 32
  });
  expect(style).toEqual({
    gridGap: 32
  });
});