"use strict";
exports.__esModule = true;
var core_1 = require("../core");
var isNumber = function (n) { return typeof n === 'number' && !isNaN(n); };
var getWidth = function (n, scale) {
    return core_1.get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};
exports.layout = core_1.system({
    width: {
        property: 'width',
        scale: 'sizes',
        transform: getWidth
    },
    height: {
        property: 'height',
        scale: 'sizes'
    },
    minWidth: {
        property: 'minWidth',
        scale: 'sizes'
    },
    minHeight: {
        property: 'minHeight',
        scale: 'sizes'
    },
    maxWidth: {
        property: 'maxWidth',
        scale: 'sizes'
    },
    maxHeight: {
        property: 'maxHeight',
        scale: 'sizes'
    },
    size: {
        properties: ['width', 'height'],
        scale: 'sizes'
    },
    overflow: true,
    overflowX: true,
    overflowY: true,
    display: true,
    verticalAlign: true
});
exports["default"] = exports.layout;
