import typography from '../../parsers/typography';
test('returns typography styles', function () {
  var style = typography({
    fontSize: 32,
    fontWeight: 'bold'
  });
  expect(style).toEqual({
    fontSize: 32,
    fontWeight: 'bold'
  });
});