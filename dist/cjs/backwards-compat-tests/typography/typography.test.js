"use strict";

var _typography = _interopRequireDefault(require("../../parsers/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns typography styles', function () {
  var style = (0, _typography["default"])({
    fontSize: 32,
    fontWeight: 'bold'
  });
  expect(style).toEqual({
    fontSize: 32,
    fontWeight: 'bold'
  });
});