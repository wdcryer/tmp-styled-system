import css from '../css';
import RosettaColor from '../testUtilities/RosettaColor';

const theme = {
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

test('match breakpoints wildcard', () => {
  const result = css({
    fontSize: {
      _: 16,
      'mobile-0': 32,
      'tablet-*': 64
    }
  })(theme);

  expect(result).toEqual({
    fontSize: 16,
    '@media mobile-0': {
      fontSize: 32
    },
    '@media tablet-0': {
      fontSize: 64
    },
    '@media tablet-50': {
      fontSize: 64
    },
    '@media tablet-100': {
      fontSize: 64
    }
  });
});

test.each`
  token         | value
  ${'green'}    | ${'green'}
  ${'red'}      | ${'red'}
  ${'red.100'}  | ${'orange'}
  ${'blue.100'} | ${'blue'}
`('converts $token to $value', ({ token, value }) => {
  const colorTheme = {
    colors: {
      green: 'green',
      red: new RosettaColor(),
      blue: {
        '100': 'blue'
      }
    }
  };

  const resolved = css({
    color: token
  })(colorTheme);

  expect(resolved).toEqual({
    color: value
  });
});
