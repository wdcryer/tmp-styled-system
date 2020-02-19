"use strict";

var _background = _interopRequireDefault(require("../background"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('parser', function () {
  var parsed = (0, _background["default"])({
    margin: 0,
    backgroundSize: 100
  });
  expect(parsed).toEqual({
    backgroundSize: 100
  });
});