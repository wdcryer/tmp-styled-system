"use strict";
exports.__esModule = true;
var core_1 = require("../../core");
var color = core_1.system({
    color: true,
    bg: {
        property: 'backgroundColor'
    }
});
var fontSize = core_1.system({
    fontSize: true
});
test('compose combines style parsers', function () {
    var parser = core_1.compose(color, fontSize);
    var styles = parser({
        color: 'tomato',
        bg: 'black',
        fontSize: 32
    });
    expect(typeof parser).toBe('function');
    expect(styles).toEqual({
        fontSize: 32,
        color: 'tomato',
        backgroundColor: 'black'
    });
});
