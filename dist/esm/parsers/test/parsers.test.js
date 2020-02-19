import background from '../background';
test('parser', function () {
  var parsed = background({
    margin: 0,
    backgroundSize: 100
  });
  expect(parsed).toEqual({
    backgroundSize: 100
  });
});