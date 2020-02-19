"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _jestEmotion = _interopRequireWildcard(require("jest-emotion"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("../../styled-system");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

expect.extend(_jestEmotion.matchers);
expect.addSnapshotSerializer(_jestEmotion["default"]);

var render = function render(el) {
  return _reactTestRenderer["default"].create(el).toJSON();
};

describe('emotion', function () {
  test('default props can be overridden', function () {
    var Box = (0, _styled["default"])('div')(_styledSystem.space);
    Box.defaultProps = {
      px: 0,
      py: 0
    };
    var json = render(_react["default"].createElement(Box, {
      px: 2,
      py: 1
    }));
    expect(json).toHaveStyleRule('padding-left', '8px');
    expect(json).toHaveStyleRule('padding-right', '8px');
    expect(json).toHaveStyleRule('padding-top', '4px');
    expect(json).toHaveStyleRule('padding-bottom', '4px');
  });
  test('responsive styles are rendered in the correct order', function () {
    var Box = (0, _styled["default"])('div')(_styledSystem.space);
    var json = render(_react["default"].createElement(Box, {
      m: [1, null, 3],
      p: [1, 2, 3]
    }));
    expect(json).toMatchSnapshot();
  });
  test('object breakpoints work with defaultProps', function () {
    var Box = (0, _styled["default"])('div')(_styledSystem.space);
    var theme = {
      disableStyledSystemCache: true,
      breakpoints: {
        small: '32em',
        medium: '40em'
      }
    };
    Box.defaultProps = {
      theme: theme,
      p: {
        _: 0,
        medium: 4
      },
      m: {
        small: 2,
        medium: 3
      }
    };
    var json = render(_react["default"].createElement(Box, null));
    expect(json).toMatchSnapshot();
  });
});