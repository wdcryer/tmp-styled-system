"use strict";
exports.__esModule = true;
var grid_1 = require("../../parsers/grid");
test('returns grid styles', function () {
    var style = grid_1["default"]({
        gridGap: 32
    });
    expect(style).toEqual({
        gridGap: 32
    });
});
