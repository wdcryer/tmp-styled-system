"use strict";
exports.__esModule = true;
var background_1 = require("../../parsers/background");
test('returns background styles', function () {
    var style = background_1["default"]({ backgroundImage: 'url(kitten.gif)' });
    expect(style).toEqual({ backgroundImage: 'url(kitten.gif)' });
});
