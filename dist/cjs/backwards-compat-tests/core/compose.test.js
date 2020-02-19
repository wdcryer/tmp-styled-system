"use strict";

var _core = require("../../core");

var color = (0, _core.system)({
  color: true,
  bg: {
    property: 'backgroundColor'
  }
});
var fontSize = (0, _core.system)({
  fontSize: true
});
test('compose combines style parsers', function () {
  var parser = (0, _core.compose)(color, fontSize);
  var styles = parser({
    color: 'tomato',
    bg: 'black',
    fontSize: 32
  });
  expect(typeof parser).toBe('function');
  expect(styles).toEqual({
    fontSize: 32,
    color: 'tomato',
    backgroundColor: 'black'
  });
});