"use strict";
exports.__esModule = true;
var core_1 = require("../core");
var defaultScale = [12, 14, 16, 20, 24, 32, 48, 64, 72];
exports.typography = core_1.system({
    fontFamily: {
        property: 'fontFamily',
        scale: 'fonts'
    },
    fontSize: {
        property: 'fontSize',
        scale: 'fontSizes',
        defaultScale: defaultScale
    },
    fontWeight: {
        property: 'fontWeight',
        scale: 'fontWeights'
    },
    lineHeight: {
        property: 'lineHeight',
        scale: 'lineHeights'
    },
    letterSpacing: {
        property: 'letterSpacing',
        scale: 'letterSpacings'
    },
    textAlign: true,
    fontStyle: true
});
exports["default"] = exports.typography;
