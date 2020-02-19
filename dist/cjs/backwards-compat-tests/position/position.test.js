"use strict";

var _position = _interopRequireDefault(require("../../parsers/position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('returns position styles', function () {
  var style = (0, _position["default"])({
    position: 'absolute',
    top: 0,
    right: 0
  });
  expect(style).toEqual({
    position: 'absolute',
    top: 0,
    right: 0
  });
});
test('returns theme values', function () {
  var style = (0, _position["default"])({
    top: 1,
    right: 2,
    bottom: 3,
    left: 4
  });
  expect(style).toEqual({
    top: 4,
    right: 8,
    bottom: 16,
    left: 32
  });
});
test('returns pixel values', function () {
  var style = (0, _position["default"])({
    top: '1px',
    right: '2px',
    bottom: '3px',
    left: '4px'
  });
  expect(style).toEqual({
    top: '1px',
    right: '2px',
    bottom: '3px',
    left: '4px'
  });
});