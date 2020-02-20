import { system } from '../core';
var theme = {
  disableStyledSystemCache: true,
  fontSize: [0, 24, 32, 48],
  breakpoints: {
    mobile: '@media mobile',
    'mobile-0': '@media mobile-0',
    'mobile-50': '@media mobile-50',
    'mobile-100': '@media mobile-100',
    tablet: '@media tablet',
    'tablet-0': '@media tablet-0',
    'tablet-50': '@media tablet-50',
    'tablet-100': '@media tablet-100',
    desktop: '@media desktop',
    'desktop-0': '@media desktop-0',
    'desktop-50': '@media desktop-50',
    'desktop-100': '@media tablet-100'
  }
};
var parser = system({
  fontSize: true
});
test('match breakpoints wildcard', function () {
  var styles = parser({
    theme: theme,
    fontSize: {
      _: 1,
      'mobile-0': 2,
      'tablet-*': 3
    }
  });
  expect(styles).toEqual({
    fontSize: 24,
    '@media mobile-0': {
      fontSize: 32
    },
    '@media tablet-0': {
      fontSize: 48
    },
    '@media tablet-50': {
      fontSize: 48
    },
    '@media tablet-100': {
      fontSize: 48
    }
  });
});