"use strict";
exports.__esModule = true;
var prop_types_1 = require("prop-types");
var styled_system_1 = require("./styled-system");
exports.propType = prop_types_1["default"].oneOfType([
    prop_types_1["default"].number,
    prop_types_1["default"].string,
    prop_types_1["default"].array,
    prop_types_1["default"].object,
]);
exports.createPropTypes = function (props) {
    return props.reduce(function (acc, name) {
        acc[name] = exports.propType;
        return acc;
    }, {});
};
exports["default"] = {
    space: exports.createPropTypes(styled_system_1.space.propNames),
    color: exports.createPropTypes(styled_system_1.color.propNames),
    layout: exports.createPropTypes(styled_system_1.layout.propNames),
    typography: exports.createPropTypes(styled_system_1.typography.propNames),
    flexbox: exports.createPropTypes(styled_system_1.flexbox.propNames),
    border: exports.createPropTypes(styled_system_1.border.propNames),
    background: exports.createPropTypes(styled_system_1.background.propNames),
    position: exports.createPropTypes(styled_system_1.position.propNames),
    grid: exports.createPropTypes(styled_system_1.grid.propNames),
    shadow: exports.createPropTypes(styled_system_1.shadow.propNames),
    buttonStyle: exports.createPropTypes(styled_system_1.buttonStyle.propNames),
    textStyle: exports.createPropTypes(styled_system_1.textStyle.propNames),
    colorStyle: exports.createPropTypes(styled_system_1.colorStyle.propNames)
};
