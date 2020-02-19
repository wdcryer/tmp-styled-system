"use strict";

var _core = require("../../core");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var theme = {
  colors: {
    primary: 'rebeccapurple',
    secondary: 'papayawhip'
  },
  fontSize: [0, 4, 8, 16]
};
var parser = (0, _core.system)({
  color: {
    property: 'color',
    scale: 'colors'
  },
  fontSize: true
});
test('uses default breakpoints', function () {
  var styles = parser({
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
}); // Per default, we expect it to be impossible to override breakpoints

test('does *not* use dynamically changed breakpoints', function () {
  var styles = parser({
    theme: _extends({}, theme, {
      breakpoints: ['11em', '22em', '33em']
    }),
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
}); // With caching disabled, we expect it to be possible to change breakpoints

test('uses dynamically changed breakpoints', function () {
  var firstStyles = parser({
    theme: _extends({}, theme, {
      breakpoints: ['11em', '22em', '33em'],
      disableStyledSystemCache: true
    }),
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
  var secondStyles = parser({
    theme: _extends({}, theme, {
      breakpoints: ['9em', '8em', '7em'],
      disableStyledSystemCache: true
    }),
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
  var thirdStyles = parser({
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
test('uses custom media query breakpoints', function () {
  var styles = parser({
    theme: {
      disableStyledSystemCache: true,
      fontSize: [0, 4, 8, 16],
      breakpoints: ['@media only screen and (pointer: fine)', '@media only screen and (pointer: coarse)']
    },
    fontSize: [1, 2, 3]
  });
  expect(styles).toEqual({
    fontSize: 4,
    '@media only screen and (pointer: fine)': {
      fontSize: 8
    },
    '@media only screen and (pointer: coarse)': {
      fontSize: 16
    }
  });
});