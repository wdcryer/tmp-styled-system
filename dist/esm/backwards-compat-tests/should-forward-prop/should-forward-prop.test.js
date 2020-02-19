import shouldForwardProp, { props } from '../../should-forward-prop';
test('returns true for valid HTML attributes', function () {
  var should = shouldForwardProp('href');
  expect(should).toBe(true);
});
props.forEach(function (prop) {
  test("returns false for Styled System " + prop + " prop", function () {
    var should = shouldForwardProp(prop);
    expect(should).toBe(false);
  });
});