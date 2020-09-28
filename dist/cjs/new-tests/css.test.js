"use strict";

var _css = _interopRequireDefault(require("../css"));

var _RosettaColor = _interopRequireDefault(require("../testUtilities/RosettaColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  token         | value\n  ", "    | ", "\n  ", "      | ", "\n  ", "  | ", "\n  ", " | ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var theme = {
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
test('match breakpoints wildcard', function () {
  var result = (0, _css["default"])({
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
test.each(_templateObject(), 'green', 'green', 'red', 'red', 'red.100', 'orange', 'blue.100', 'blue')('converts $token to $value', function (_ref) {
  var token = _ref.token,
      value = _ref.value;
  var colorTheme = {
    colors: {
      green: 'green',
      red: new _RosettaColor["default"](),
      blue: {
        '100': 'blue'
      }
    }
  };
  var resolved = (0, _css["default"])({
    color: token
  })(colorTheme);
  expect(resolved).toEqual({
    color: value
  });
});