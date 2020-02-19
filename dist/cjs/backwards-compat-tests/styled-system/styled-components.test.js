"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("jest-styled-components");

var _styledSystem = require("../../styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var render = function render(el) {
  return _reactTestRenderer["default"].create(el).toJSON();
};

describe('styled-components', function () {
  test('default props can be overridden', function () {
    var Box = (0, _styledComponents["default"])('div')(_styledSystem.space);
    Box.defaultProps = {
      m: 0,
      px: 0,
      py: 0
    };
    var json = render(_react["default"].createElement(Box, {
      px: 2,
      m: 4
    }));
    expect(json).toHaveStyleRule('padding-left', '8px');
    expect(json).toHaveStyleRule('padding-right', '8px');
    expect(json).toHaveStyleRule('padding-top', '0');
    expect(json).toHaveStyleRule('padding-bottom', '0');
    expect(json).toHaveStyleRule('margin', '32px');
  });
  test('extended components keep their props', function () {
    var Box = (0, _styledComponents["default"])('div')(_styledSystem.space);
    var Card = (0, _styledComponents["default"])(Box)(_styledSystem.color);
    var json = render(_react["default"].createElement(Card, {
      m: 3,
      color: "tomato"
    }));
    expect(json).toHaveStyleRule('margin', '16px');
    expect(json).toHaveStyleRule('color', 'tomato');
  });
  test('extended components keep their props with as prop', function () {
    var Box = (0, _styledComponents["default"])('div')(_styledSystem.space);
    var Card = (0, _styledComponents["default"])(Box)(_styledSystem.color);
    var json = render(_react["default"].createElement(Card, {
      as: "header",
      m: 3,
      color: "tomato"
    }));
    expect(json).toHaveStyleRule('margin', '16px');
    expect(json).toHaveStyleRule('color', 'tomato');
  });
  test('responsive styles are rendered in the correct order', function () {
    var Box = (0, _styledComponents["default"])('div')(_styledSystem.space);
    var json = render(_react["default"].createElement(Box, {
      m: [1, 2, 3],
      p: [1, 2, 3]
    }));
    expect(json).toMatchSnapshot();
  });
});