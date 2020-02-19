"use strict";

var _core = require("../../core");

test('deeply merges', function () {
  var result = (0, _core.merge)({
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