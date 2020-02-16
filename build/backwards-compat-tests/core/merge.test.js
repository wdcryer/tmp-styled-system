"use strict";
exports.__esModule = true;
var core_1 = require("../../core");
test('deeply merges', function () {
    var result = core_1.merge({
        hello: 'hi',
        media: {
            howdy: 'ho'
        }
    }, {
        beep: 'boop',
        media: {
            bleep: 'bloop'
        }
    });
    expect(result).toEqual({
        hello: 'hi',
        beep: 'boop',
        media: {
            howdy: 'ho',
            bleep: 'bloop'
        }
    });
});
