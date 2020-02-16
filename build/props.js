"use strict";
exports.__esModule = true;
var styled_system_1 = require("./styled-system");
var all = styled_system_1.compose(styled_system_1.space, styled_system_1.typography, styled_system_1.color, styled_system_1.layout, styled_system_1.flexbox, styled_system_1.border, styled_system_1.background, styled_system_1.position, styled_system_1.grid, styled_system_1.shadow, styled_system_1.buttonStyle, styled_system_1.textStyle, styled_system_1.colorStyle);
var regex = new RegExp("^(" + all.propNames.join('|') + ")$");
exports.omit = function (props) {
    var next = {};
    for (var key in props) {
        if (regex.test(key))
            continue;
        next[key] = props[key];
    }
    return next;
};
exports.pick = function (props) {
    var next = {};
    for (var key in props) {
        if (!regex.test(key))
            continue;
        next[key] = props[key];
    }
    return next;
};
