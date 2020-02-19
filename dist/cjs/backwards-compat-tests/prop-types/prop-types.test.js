"use strict";

var _propTypes = _interopRequireDefault(require("../../prop-types"));

var _styledSystem = require("../../styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('includes prop types for all space prop names', function () {
  var types = Object.keys(_propTypes["default"].space);
  expect(types).toEqual(_styledSystem.space.propNames);
});
test('includes prop types for all color prop names', function () {
  var types = Object.keys(_propTypes["default"].color);
  expect(types).toEqual(_styledSystem.color.propNames);
});
test('includes prop types for all layout prop names', function () {
  var types = Object.keys(_propTypes["default"].layout);
  expect(types).toEqual(_styledSystem.layout.propNames);
});
test('includes prop types for all typography prop names', function () {
  var types = Object.keys(_propTypes["default"].typography);
  expect(types).toEqual(_styledSystem.typography.propNames);
});
test('includes prop types for all flexbox prop names', function () {
  var types = Object.keys(_propTypes["default"].flexbox);
  expect(types).toEqual(_styledSystem.flexbox.propNames);
});
test('includes prop types for all border prop names', function () {
  var types = Object.keys(_propTypes["default"].border);
  expect(types).toEqual(_styledSystem.border.propNames);
});
test('includes prop types for all background prop names', function () {
  var types = Object.keys(_propTypes["default"].background);
  expect(types).toEqual(_styledSystem.background.propNames);
});
test('includes prop types for all position prop names', function () {
  var types = Object.keys(_propTypes["default"].position);
  expect(types).toEqual(_styledSystem.position.propNames);
});
test('includes prop types for all grid prop names', function () {
  var types = Object.keys(_propTypes["default"].grid);
  expect(types).toEqual(_styledSystem.grid.propNames);
});
test('includes prop types for all shadow prop names', function () {
  var types = Object.keys(_propTypes["default"].shadow);
  expect(types).toEqual(_styledSystem.shadow.propNames);
});
test('includes prop types for all buttonStyle prop names', function () {
  var types = Object.keys(_propTypes["default"].buttonStyle);
  expect(types).toEqual(_styledSystem.buttonStyle.propNames);
});
test('includes prop types for all textStyle prop names', function () {
  var types = Object.keys(_propTypes["default"].textStyle);
  expect(types).toEqual(_styledSystem.textStyle.propNames);
});
test('includes prop types for all colorStyle prop names', function () {
  var types = Object.keys(_propTypes["default"].colorStyle);
  expect(types).toEqual(_styledSystem.colorStyle.propNames);
});