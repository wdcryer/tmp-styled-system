import { get } from '../../core';
test('returns a deeply nested value', function () {
  var a = get({
    colors: {
      blue: ['#0cf', '#0be', '#09d', '#07c']
    }
  }, 'colors.blue.3');
  expect(a).toBe('#07c');
});
test('supports fallback values', function () {
  var a = get({}, 'hi', 'nope');
  expect(a).toBe('nope');
});
test('handles number values', function () {
  var a = get([1, 2, 3], 0);
  expect(a).toBe(1);
});
test('handles undefined values', function () {
  var a = get({}, undefined);
  expect(a).toBe(undefined);
});
test('handles null values', function () {
  var a = get({}, null);
  expect(a).toBe(undefined);
});
test('returns 0 index items', function () {
  var a = get(['a', 'b', 'c'], 0);
  expect(a).toBe('a');
});