"use strict";
exports.__esModule = true;
var color_1 = require("../../parsers/color");
test('returns colors styles', function () {
    var style = color_1["default"]({
        color: 'gold',
        bg: 'tomato'
    });
    expect(style).toEqual({
        color: 'gold',
        backgroundColor: 'tomato'
    });
});
