"use strict";

var _core = require("../../core");

var _RosettaColor = _interopRequireDefault(require("../../testUtilities/RosettaColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var theme = {
  colors: {
    primary: 'rebeccapurple',
    secondary: 'papayawhip',
    tertiary: new _RosettaColor["default"]()
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
  // Breakpoints is an array
  var styles = parser({
    theme: _extends({}, theme, {
      disableStyledSystemCache: true,
      breakpoints: ['@media only screen and (pointer: fine)', '@media only screen and (pointer: coarse)']
    }),
    fontSize: [1, 2, 3]
  }); // Breakpoints is a key-value mapping

  var styles2 = parser({
    theme: _extends({}, theme, {
      disableStyledSystemCache: true,
      breakpoints: {
        'break-0': '@media only screen and (pointer: fine)',
        'break-1': '@media only screen and (pointer: coarse)'
      }
    }),
    fontSize: {
      _: 1,
      'break-0': 2,
      'break-1': 3
    }
  });
  var expected = {
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
test('supports rosetta colors class', function () {
  var styles1 = parser({
    theme: theme,
    color: 'tertiary'
  });
  var expected1 = {
    color: new _RosettaColor["default"]()
  };
  expect(styles1).toEqual(expected1);
  expect(styles1.color.valueOf()).toEqual('red');
  var styles2 = parser({
    theme: theme,
    color: 'tertiary.100'
  });
  var expected2 = {
    color: 'orange'
  };
  expect(styles2).toEqual(expected2);
  var styles3 = parser({
    theme: theme,
    color: 'tertiary.200'
  });
  var expected3 = {
    color: 'yellow'
  };
  expect(styles3).toEqual(expected3);
});