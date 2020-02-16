"use strict";
exports.__esModule = true;
var flexbox_1 = require("../../parsers/flexbox");
test('returns flexbox styles', function () {
    var style = flexbox_1["default"]({
        alignItems: 'center',
        flex: '1 1 auto'
    });
    expect(style).toEqual({
        alignItems: 'center',
        flex: '1 1 auto'
    });
});
