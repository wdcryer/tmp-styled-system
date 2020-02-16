"use strict";
exports.__esModule = true;
var typography_1 = require("../../parsers/typography");
test('returns typography styles', function () {
    var style = typography_1["default"]({
        fontSize: 32,
        fontWeight: 'bold'
    });
    expect(style).toEqual({
        fontSize: 32,
        fontWeight: 'bold'
    });
});
