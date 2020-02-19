import { pick, omit } from '../../props';
var props = {
  id: 'hi',
  className: 'beep',
  p: 3,
  bg: 'tomato',
  color: 'white'
};
test('omits styled-system props', function () {
  var attr = omit(props);
  expect(attr).toEqual({
    id: 'hi',
    className: 'beep'
  });
});
test('picks styled-system props', function () {
  var sx = pick(props);
  expect(sx).toEqual({
    p: 3,
    bg: 'tomato',
    color: 'white'
  });
});