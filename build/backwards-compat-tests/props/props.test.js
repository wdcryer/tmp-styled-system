"use strict";
exports.__esModule = true;
var props_1 = require("../../props");
var props = {
    id: 'hi',
    className: 'beep',
    p: 3,
    bg: 'tomato',
    color: 'white'
};
test('omits styled-system props', function () {
    var attr = props_1.omit(props);
    expect(attr).toEqual({
        id: 'hi',
        className: 'beep'
    });
});
test('picks styled-system props', function () {
    var sx = props_1.pick(props);
    expect(sx).toEqual({
        p: 3,
        bg: 'tomato',
        color: 'white'
    });
});
