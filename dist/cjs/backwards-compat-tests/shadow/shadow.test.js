"use strict";

var _shadow = _interopRequireDefault(require("../../parsers/shadow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns shadow styles', function () {
  var style = (0, _shadow["default"])({
    theme: {
      shadows: {
        small: '0 1px 4px rgba(0, 0, 0, .125)'
      }
    },
    textShadow: '0 -1px rgba(255, 255, 255, .25)',
    boxShadow: 'small'
  });
  expect(style).toEqual({
    textShadow: '0 -1px rgba(255, 255, 255, .25)',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .125)'
  });
});