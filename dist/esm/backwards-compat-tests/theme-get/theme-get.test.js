import { themeGet } from '../../theme-get';
var theme = {
  colors: {
    blue: '#07c',
    black: '#111'
  }
};
test('themeGet returns values from the theme', function () {
  var a = themeGet('colors.blue')({
    theme: theme
  });
  expect(a).toBe('#07c');
});
test('themeGet does not throw when value doesnt exist', function () {
  var a = themeGet('colors.blue.5')({
    theme: theme
  });
  expect(a).toBe(null);
});
test('themeGet accepts a fallback', function () {
  var a = themeGet('colors.lightblue', '#0cf')({
    theme: theme
  });
  expect(a).toBe('#0cf');
});