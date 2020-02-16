"use strict";
exports.__esModule = true;
var background_1 = require("../background");
test('parser', function () {
    var parsed = background_1["default"]({
        margin: 0,
        backgroundSize: 100
    });
    expect(parsed).toEqual({
        backgroundSize: 100
    });
});
