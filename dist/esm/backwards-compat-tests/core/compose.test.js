import { system, compose } from '../../core';
var color = system({
  color: true,
  bg: {
    property: 'backgroundColor'
  }
});
var fontSize = system({
  fontSize: true
});
test('compose combines style parsers', function () {
  var parser = compose(color, fontSize);
  var styles = parser({
    color: 'tomato',
    bg: 'black',
    fontSize: 32
  });
  expect(typeof parser).toBe('function');
  expect(styles).toEqual({
    fontSize: 32,
    color: 'tomato',
    backgroundColor: 'black'
  });
});