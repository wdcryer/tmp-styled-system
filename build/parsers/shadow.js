"use strict";
exports.__esModule = true;
var core_1 = require("../core");
exports.shadow = core_1.system({
    boxShadow: {
        property: 'boxShadow',
        scale: 'shadows'
    },
    textShadow: {
        property: 'textShadow',
        scale: 'shadows'
    }
});
exports["default"] = exports.shadow;
