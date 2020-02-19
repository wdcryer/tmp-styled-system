import { color, width, layout, fontSize, size, gridGap, gridRowGap, gridColumnGap, borders, shadow, compose } from '../../styled-system';
var theme = {
  colors: {
    blue: '#07c',
    black: '#111'
  }
};
test('returns color values from theme', function () {
  var a = color({
    theme: theme,
    color: 'blue',
    bg: 'black'
  });
  expect(a).toEqual({
    color: '#07c',
    backgroundColor: '#111'
  });
});
test('returns raw color values', function () {
  var a = color({
    theme: theme,
    color: 'inherit',
    bg: 'tomato'
  });
  expect(a).toEqual({
    color: 'inherit',
    backgroundColor: 'tomato'
  });
});
test.skip('backgroundColor prop overrides bg prop', function () {
  var a = color({
    backgroundColor: 'tomato',
    bg: 'blue'
  });
  expect(a).toEqual({
    backgroundColor: 'tomato'
  });
});
test('returns a pixel font-size', function () {
  var a = fontSize({
    fontSize: 48
  });
  expect(a).toEqual({
    fontSize: 48
  });
});
test('uses a default font-size scale', function () {
  var a = fontSize({
    fontSize: 2
  });
  expect(a).toEqual({
    fontSize: 16
  });
});
test('returns a string font-size', function () {
  var a = fontSize({
    fontSize: '2em'
  });
  expect(a).toEqual({
    fontSize: '2em'
  });
});
test('returns a percentage based width', function () {
  var a = width({
    width: 1 / 2
  });
  expect(a).toEqual({
    width: '50%'
  });
});
test('returns a pixel based width', function () {
  var a = width({
    width: 256
  });
  expect(a).toEqual({
    width: 256
  });
});
test('returns a string width', function () {
  var a = width({
    width: 'auto'
  });
  expect(a).toEqual({
    width: 'auto'
  });
});
test('returns a width based on theme.sizes', function () {
  var a = width({
    theme: {
      sizes: [24, 48]
    },
    width: 1
  });
  expect(a).toEqual({
    width: 48
  });
});
test('returns fractional responsive widths', function () {
  var a = width({
    width: [1, 1 / 2, 1 / 4]
  });
  expect(a).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': {
      width: '50%'
    },
    '@media screen and (min-width: 52em)': {
      width: '25%'
    }
  });
});
test('size returns width and height', function () {
  var styles = size({
    size: 4
  });
  expect(styles).toEqual({
    width: 4,
    height: 4
  });
}); // grid

test('gridGap returns a scalar style', function () {
  var a = gridGap({
    theme: {
      space: [0, 2, 4, 8]
    },
    gridGap: 3
  });
  expect(a).toEqual({
    gridGap: 8
  });
});
test('gridGap uses the default scale', function () {
  var a = gridGap({
    theme: {},
    gridGap: 2
  });
  expect(a).toEqual({
    gridGap: 8
  });
});
test('gridRowGap returns a scalar style', function () {
  var a = gridRowGap({
    theme: {
      space: [0, 2, 4, 8]
    },
    gridRowGap: 3
  });
  expect(a).toEqual({
    gridRowGap: 8
  });
});
test('gridRowGap uses the default scale', function () {
  var a = gridRowGap({
    theme: {},
    gridRowGap: 2
  });
  expect(a).toEqual({
    gridRowGap: 8
  });
});
test('gridColumnGap returns a scalar style', function () {
  var a = gridColumnGap({
    theme: {
      space: [0, 2, 4, 8]
    },
    gridColumnGap: 3
  });
  expect(a).toEqual({
    gridColumnGap: 8
  });
});
test('gridColumnGap uses the default scale', function () {
  var a = gridColumnGap({
    theme: {},
    gridColumnGap: 2
  });
  expect(a).toEqual({
    gridColumnGap: 8
  });
});
test('borders prop returns correct sequence', function () {
  var a = borders({
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red'
  });
  expect(a).toEqual({
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red'
  });
});
test('shadow handles boxShadow and textShadow props', function () {
  var a = shadow({
    textShadow: '0 -1px rgba(255, 255, 255, .25)',
    boxShadow: 'none'
  });
  expect(a).toEqual({
    textShadow: '0 -1px rgba(255, 255, 255, .25)',
    boxShadow: 'none'
  });
});
test('compose maintains media query order', function () {
  var parser = compose(color, layout);
  var a = parser({
    bg: ['tomato', null, 'black'],
    width: ['100%', '50%', '25%']
  });
  expect(Object.keys(a)).toEqual(['backgroundColor', '@media screen and (min-width: 40em)', '@media screen and (min-width: 52em)', 'width']);
});