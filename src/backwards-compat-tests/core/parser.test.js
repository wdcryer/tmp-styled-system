import { system } from '../../core';
import RosettaColor from '../../testUtilities/RosettaColor';

const theme = {
  colors: {
    primary: 'rebeccapurple',
    secondary: 'papayawhip',
    tertiary: new RosettaColor()
  },
  fontSize: [0, 4, 8, 16]
};

const parser = system({
  color: {
    property: 'color',
    scale: 'colors'
  },
  fontSize: true
});

test('uses default breakpoints', () => {
  const styles = parser({
    theme: theme,
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary']
  });
  expect(styles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 40em)': {
      fontSize: 8
    },
    '@media screen and (min-width: 52em)': {
      fontSize: 16,
      color: 'papayawhip'
    }
  });
});

// Per default, we expect it to be impossible to override breakpoints
test('does *not* use dynamically changed breakpoints', () => {
  const styles = parser({
    theme: { ...theme, breakpoints: ['11em', '22em', '33em'] },
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary']
  });
  expect(styles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 40em)': {
      fontSize: 8
    },
    '@media screen and (min-width: 52em)': {
      fontSize: 16,
      color: 'papayawhip'
    }
  });
});

// With caching disabled, we expect it to be possible to change breakpoints
test('uses dynamically changed breakpoints', () => {
  const firstStyles = parser({
    theme: {
      ...theme,
      breakpoints: ['11em', '22em', '33em'],
      disableStyledSystemCache: true
    },
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary']
  });
  expect(firstStyles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 11em)': {
      fontSize: 8
    },
    '@media screen and (min-width: 22em)': {
      fontSize: 16,
      color: 'papayawhip'
    }
  });

  const secondStyles = parser({
    theme: {
      ...theme,
      breakpoints: ['9em', '8em', '7em'],
      disableStyledSystemCache: true
    },
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary']
  });
  expect(secondStyles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 9em)': {
      fontSize: 8
    },
    '@media screen and (min-width: 8em)': {
      fontSize: 16,
      color: 'papayawhip'
    }
  });

  const thirdStyles = parser({
    theme: theme,
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary']
  });
  expect(thirdStyles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 9em)': {
      fontSize: 8
    },
    '@media screen and (min-width: 8em)': {
      fontSize: 16,
      color: 'papayawhip'
    }
  });
});

test('uses custom media query breakpoints', () => {
  // Breakpoints is an array
  const styles = parser({
    theme: {
      ...theme,
      disableStyledSystemCache: true,
      breakpoints: [
        '@media only screen and (pointer: fine)',
        '@media only screen and (pointer: coarse)'
      ]
    },
    fontSize: [1, 2, 3]
  });

  // Breakpoints is a key-value mapping
  const styles2 = parser({
    theme: {
      ...theme,
      disableStyledSystemCache: true,
      breakpoints: {
        'break-0': '@media only screen and (pointer: fine)',
        'break-1': '@media only screen and (pointer: coarse)'
      }
    },
    fontSize: {
      _: 1,
      'break-0': 2,
      'break-1': 3
    }
  });

  const expected = {
    fontSize: 4,
    '@media only screen and (pointer: fine)': {
      fontSize: 8
    },
    '@media only screen and (pointer: coarse)': {
      fontSize: 16
    }
  };
  expect(styles).toEqual(expected);
  expect(styles2).toEqual(expected);
});

test('supports rosetta colors class', () => {
  const styles1 = parser({
    theme: theme,
    color: 'tertiary'
  });

  const expected1 = {
    color: new RosettaColor()
  };

  expect(styles1).toEqual(expected1);
  expect(styles1.color.valueOf()).toEqual('red');

  const styles2 = parser({
    theme: theme,
    color: 'tertiary.100'
  });

  const expected2 = {
    color: 'orange'
  };

  expect(styles2).toEqual(expected2);

  const styles3 = parser({
    theme: theme,
    color: 'tertiary.200'
  });

  const expected3 = {
    color: 'yellow'
  };

  expect(styles3).toEqual(expected3);
});
