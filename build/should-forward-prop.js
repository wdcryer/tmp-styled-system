"use strict";
exports.__esModule = true;
var memoize_1 = require("@emotion/memoize");
var is_prop_valid_1 = require("@emotion/is-prop-valid");
var styled_system_1 = require("./styled-system");
var all = styled_system_1.compose(styled_system_1.space, styled_system_1.typography, styled_system_1.color, styled_system_1.layout, styled_system_1.flexbox, styled_system_1.border, styled_system_1.background, styled_system_1.position, styled_system_1.grid, styled_system_1.shadow, styled_system_1.buttonStyle, styled_system_1.textStyle, styled_system_1.colorStyle);
exports.props = all.propNames;
exports.createShouldForwardProp = function (props) {
    var regex = new RegExp("^(" + props.join('|') + ")$");
    return memoize_1["default"](function (prop) { return is_prop_valid_1["default"](prop) && !regex.test(prop); });
};
exports["default"] = exports.createShouldForwardProp(exports.props);
