"use strict";

var _flexbox = _interopRequireDefault(require("../../parsers/flexbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns flexbox styles', function () {
  var style = (0, _flexbox["default"])({
    alignItems: 'center',
    flex: '1 1 auto'
  });
  expect(style).toEqual({
    alignItems: 'center',
    flex: '1 1 auto'
  });
});