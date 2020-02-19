import border from '../../parsers/border';
test('returns border styles', function () {
  var style = border({
    border: '1px solid gold'
  });
  expect(style).toEqual({
    border: '1px solid gold'
  });
});
test('returns individual border styles', function () {
  var style = border({
    theme: {
      borderWidths: {
        thin: 1
      },
      colors: {
        primary: 'red'
      },
      borderStyles: {
        thick: 'solid'
      },
      radii: {
        small: 5
      }
    },
    borderTopWidth: 'thin',
    borderTopColor: 'primary',
    borderTopStyle: 'thick',
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    borderBottomWidth: 'thin',
    borderBottomColor: 'primary',
    borderBottomStyle: 'thick',
    borderBottomLeftRadius: 'small',
    borderBottomRightRadius: 'small',
    borderRightWidth: 'thin',
    borderRightColor: 'primary',
    borderRightStyle: 'thick',
    borderLeftWidth: 'thin',
    borderLeftColor: 'primary',
    borderLeftStyle: 'thick'
  });
  expect(style).toEqual({
    borderTopColor: 'red',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderRightColor: 'red',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderLeftColor: 'red',
    borderLeftWidth: 1,
    borderLeftStyle: 'solid'
  });
});
test('returns border top and bottom radii', function () {
  var _border, _expect$toEqual;

  var style = border((_border = {
    theme: {
      radii: {
        small: 5
      }
    },
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    borderBottomRightRadius: 'small'
  }, _border["borderBottomRightRadius"] = 'small', _border));
  expect(style).toEqual((_expect$toEqual = {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }, _expect$toEqual["borderBottomRightRadius"] = 5, _expect$toEqual));
});