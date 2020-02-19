"use strict";

exports.__esModule = true;
exports["default"] = exports.createPropTypes = exports.propType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("./styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propType = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].object]);

exports.propType = propType;

var createPropTypes = function createPropTypes(props) {
  return props.reduce(function (acc, name) {
    acc[name] = propType;
    return acc;
  }, {});
};

exports.createPropTypes = createPropTypes;
var _default = {
  space: createPropTypes(_styledSystem.space.propNames),
  color: createPropTypes(_styledSystem.color.propNames),
  layout: createPropTypes(_styledSystem.layout.propNames),
  typography: createPropTypes(_styledSystem.typography.propNames),
  flexbox: createPropTypes(_styledSystem.flexbox.propNames),
  border: createPropTypes(_styledSystem.border.propNames),
  background: createPropTypes(_styledSystem.background.propNames),
  position: createPropTypes(_styledSystem.position.propNames),
  grid: createPropTypes(_styledSystem.grid.propNames),
  shadow: createPropTypes(_styledSystem.shadow.propNames),
  buttonStyle: createPropTypes(_styledSystem.buttonStyle.propNames),
  textStyle: createPropTypes(_styledSystem.textStyle.propNames),
  colorStyle: createPropTypes(_styledSystem.colorStyle.propNames)
};
exports["default"] = _default;