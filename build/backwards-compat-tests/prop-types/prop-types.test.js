"use strict";
exports.__esModule = true;
var prop_types_1 = require("../../prop-types");
var styled_system_1 = require("../../styled-system");
test('includes prop types for all space prop names', function () {
    var types = Object.keys(prop_types_1["default"].space);
    expect(types).toEqual(styled_system_1.space.propNames);
});
test('includes prop types for all color prop names', function () {
    var types = Object.keys(prop_types_1["default"].color);
    expect(types).toEqual(styled_system_1.color.propNames);
});
test('includes prop types for all layout prop names', function () {
    var types = Object.keys(prop_types_1["default"].layout);
    expect(types).toEqual(styled_system_1.layout.propNames);
});
test('includes prop types for all typography prop names', function () {
    var types = Object.keys(prop_types_1["default"].typography);
    expect(types).toEqual(styled_system_1.typography.propNames);
});
test('includes prop types for all flexbox prop names', function () {
    var types = Object.keys(prop_types_1["default"].flexbox);
    expect(types).toEqual(styled_system_1.flexbox.propNames);
});
test('includes prop types for all border prop names', function () {
    var types = Object.keys(prop_types_1["default"].border);
    expect(types).toEqual(styled_system_1.border.propNames);
});
test('includes prop types for all background prop names', function () {
    var types = Object.keys(prop_types_1["default"].background);
    expect(types).toEqual(styled_system_1.background.propNames);
});
test('includes prop types for all position prop names', function () {
    var types = Object.keys(prop_types_1["default"].position);
    expect(types).toEqual(styled_system_1.position.propNames);
});
test('includes prop types for all grid prop names', function () {
    var types = Object.keys(prop_types_1["default"].grid);
    expect(types).toEqual(styled_system_1.grid.propNames);
});
test('includes prop types for all shadow prop names', function () {
    var types = Object.keys(prop_types_1["default"].shadow);
    expect(types).toEqual(styled_system_1.shadow.propNames);
});
test('includes prop types for all buttonStyle prop names', function () {
    var types = Object.keys(prop_types_1["default"].buttonStyle);
    expect(types).toEqual(styled_system_1.buttonStyle.propNames);
});
test('includes prop types for all textStyle prop names', function () {
    var types = Object.keys(prop_types_1["default"].textStyle);
    expect(types).toEqual(styled_system_1.textStyle.propNames);
});
test('includes prop types for all colorStyle prop names', function () {
    var types = Object.keys(prop_types_1["default"].colorStyle);
    expect(types).toEqual(styled_system_1.colorStyle.propNames);
});
