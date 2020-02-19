import color from '../../parsers/color';
test('returns colors styles', function () {
  var style = color({
    color: 'gold',
    bg: 'tomato'
  });
  expect(style).toEqual({
    color: 'gold',
    backgroundColor: 'tomato'
  });
});