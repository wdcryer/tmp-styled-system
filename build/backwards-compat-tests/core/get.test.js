"use strict";
exports.__esModule = true;
var core_1 = require("../../core");
test('returns a deeply nested value', function () {
    var a = core_1.get({
        colors: {
            blue: ['#0cf', '#0be', '#09d', '#07c']
        }
    }, 'colors.blue.3');
    expect(a).toBe('#07c');
});
test('supports fallback values', function () {
    var a = core_1.get({}, 'hi', 'nope');
    expect(a).toBe('nope');
});
test('handles number values', function () {
    var a = core_1.get([1, 2, 3], 0);
    expect(a).toBe(1);
});
test('handles undefined values', function () {
    var a = core_1.get({}, undefined);
    expect(a).toBe(undefined);
});
test('handles null values', function () {
    var a = core_1.get({}, null);
    expect(a).toBe(undefined);
});
test('returns 0 index items', function () {
    var a = core_1.get(['a', 'b', 'c'], 0);
    expect(a).toBe('a');
});
