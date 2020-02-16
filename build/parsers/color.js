"use strict";
exports.__esModule = true;
var core_1 = require("../core");
var backgroundColor = {
    property: 'backgroundColor',
    scale: 'colors'
};
exports.color = core_1.system({
    color: {
        property: 'color',
        scale: 'colors'
    },
    backgroundColor: backgroundColor,
    opacity: true,
    // alias
    bg: backgroundColor
});
exports["default"] = exports.color;
