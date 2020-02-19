"use strict";

var _background = _interopRequireDefault(require("../../parsers/background"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns background styles', function () {
  var style = (0, _background["default"])({
    backgroundImage: 'url(kitten.gif)'
  });
  expect(style).toEqual({
    backgroundImage: 'url(kitten.gif)'
  });
});