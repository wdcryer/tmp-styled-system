"use strict";
exports.__esModule = true;
var should_forward_prop_1 = require("../../should-forward-prop");
test('returns true for valid HTML attributes', function () {
    var should = should_forward_prop_1["default"]('href');
    expect(should).toBe(true);
});
should_forward_prop_1.props.forEach(function (prop) {
    test("returns false for Styled System " + prop + " prop", function () {
        var should = should_forward_prop_1["default"](prop);
        expect(should).toBe(false);
    });
});
