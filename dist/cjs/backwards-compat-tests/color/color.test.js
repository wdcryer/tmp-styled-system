"use strict";

var _color = _interopRequireDefault(require("../../parsers/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns colors styles', function () {
  var style = (0, _color["default"])({
    color: 'gold',
    bg: 'tomato'
  });
  expect(style).toEqual({
    color: 'gold',
    backgroundColor: 'tomato'
  });
});