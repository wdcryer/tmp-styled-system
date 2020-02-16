"use strict";
exports.__esModule = true;
var layout_1 = require("../../parsers/layout");
test('returns layout styles', function () {
    var style = layout_1["default"]({
        width: [1, 1 / 2, 1 / 4],
        minHeight: 32,
        maxWidth: 768
    });
    expect(style).toEqual({
        width: '100%',
        maxWidth: 768,
        minHeight: 32,
        '@media screen and (min-width: 40em)': {
            width: '50%'
        },
        '@media screen and (min-width: 52em)': {
            width: '25%'
        }
    });
});
test('returns 0 from theme.sizes', function () {
    var style = layout_1["default"]({
        theme: {
            sizes: [24, 48, 96]
        },
        width: 0,
        height: 0
    });
    expect(style).toEqual({
        width: 24,
        height: 24
    });
});
