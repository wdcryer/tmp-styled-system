import { merge } from '../../core';
test('deeply merges', function () {
  var result = merge({
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