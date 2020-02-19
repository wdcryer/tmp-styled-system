import background from '../../parsers/background';
test('returns background styles', function () {
  var style = background({
    backgroundImage: 'url(kitten.gif)'
  });
  expect(style).toEqual({
    backgroundImage: 'url(kitten.gif)'
  });
});