"use strict";

exports.__esModule = true;
exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.borderRadius = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.borderColor = exports.borderStyle = exports.borderWidth = exports.gridArea = exports.gridTemplateAreas = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flexBasis = exports.flexShrink = exports.flexGrow = exports.flex = exports.flexDirection = exports.flexWrap = exports.justifyContent = exports.justifyItems = exports.alignContent = exports.alignItems = exports.letterSpacing = exports.fontStyle = exports.textAlign = exports.lineHeight = exports.fontWeight = exports.fontFamily = exports.fontSize = exports.opacity = exports.overflowY = exports.overflowX = exports.overflow = exports.display = exports.verticalAlign = exports.size = exports.maxHeight = exports.maxWidth = exports.minHeight = exports.minWidth = exports.height = exports.width = exports.propType = exports.colorStyle = exports.textStyle = exports.buttonStyle = exports.variant = exports.borders = exports.propTypes = exports.css = exports.textShadow = exports.boxShadow = exports.shadow = exports.space = exports.padding = exports.margin = exports.system = exports.compose = exports.createStyleFunction = exports.createParser = exports.get = void 0;

var _layout = _interopRequireWildcard(require("./parsers/layout"));

exports.layout = _layout.layout;

var _color = _interopRequireWildcard(require("./parsers/color"));

exports.color = _color.color;

var _typography = _interopRequireWildcard(require("./parsers/typography"));

exports.typography = _typography.typography;

var _flexbox = _interopRequireWildcard(require("./parsers/flexbox"));

exports.flexbox = _flexbox.flexbox;

var _grid = _interopRequireWildcard(require("./parsers/grid"));

exports.grid = _grid.grid;

var _border = _interopRequireWildcard(require("./parsers/border"));

exports.border = _border.border;
exports.borders = _border["default"];

var _background = _interopRequireWildcard(require("./parsers/background"));

exports.background = _background.background;

var _position = _interopRequireWildcard(require("./parsers/position"));

exports.position = _position.position;

var _core = require("./core");

exports.get = _core.get;
exports.createParser = _core.createParser;
exports.createStyleFunction = _core.createStyleFunction;
exports.compose = _core.compose;
exports.system = _core.system;

var _space = require("./parsers/space");

exports.margin = _space.margin;
exports.padding = _space.padding;
exports.space = _space.space;

var _shadow = _interopRequireWildcard(require("./parsers/shadow"));

exports.shadow = _shadow.shadow;
exports.boxShadow = _shadow["default"];
exports.textShadow = _shadow["default"];

var _variant = require("./variant");

exports.variant = _variant.variant;
exports.buttonStyle = _variant.buttonStyle;
exports.textStyle = _variant.textStyle;
exports.colorStyle = _variant.colorStyle;

var _css = _interopRequireDefault(require("./css"));

exports.css = _css["default"];

var _propTypes = _interopRequireWildcard(require("./prop-types"));

exports.propTypes = _propTypes["default"];
exports.propType = _propTypes.propType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// v4 api shims
var width = _layout["default"].width,
    height = _layout["default"].height,
    minWidth = _layout["default"].minWidth,
    minHeight = _layout["default"].minHeight,
    maxWidth = _layout["default"].maxWidth,
    maxHeight = _layout["default"].maxHeight,
    size = _layout["default"].size,
    verticalAlign = _layout["default"].verticalAlign,
    display = _layout["default"].display,
    overflow = _layout["default"].overflow,
    overflowX = _layout["default"].overflowX,
    overflowY = _layout["default"].overflowY;
exports.overflowY = overflowY;
exports.overflowX = overflowX;
exports.overflow = overflow;
exports.display = display;
exports.verticalAlign = verticalAlign;
exports.size = size;
exports.maxHeight = maxHeight;
exports.maxWidth = maxWidth;
exports.minHeight = minHeight;
exports.minWidth = minWidth;
exports.height = height;
exports.width = width;
var opacity = _color["default"].opacity;
exports.opacity = opacity;
var fontSize = _typography["default"].fontSize,
    fontFamily = _typography["default"].fontFamily,
    fontWeight = _typography["default"].fontWeight,
    lineHeight = _typography["default"].lineHeight,
    textAlign = _typography["default"].textAlign,
    fontStyle = _typography["default"].fontStyle,
    letterSpacing = _typography["default"].letterSpacing;
exports.letterSpacing = letterSpacing;
exports.fontStyle = fontStyle;
exports.textAlign = textAlign;
exports.lineHeight = lineHeight;
exports.fontWeight = fontWeight;
exports.fontFamily = fontFamily;
exports.fontSize = fontSize;
var alignItems = _flexbox["default"].alignItems,
    alignContent = _flexbox["default"].alignContent,
    justifyItems = _flexbox["default"].justifyItems,
    justifyContent = _flexbox["default"].justifyContent,
    flexWrap = _flexbox["default"].flexWrap,
    flexDirection = _flexbox["default"].flexDirection,
    flex = _flexbox["default"].flex,
    flexGrow = _flexbox["default"].flexGrow,
    flexShrink = _flexbox["default"].flexShrink,
    flexBasis = _flexbox["default"].flexBasis,
    justifySelf = _flexbox["default"].justifySelf,
    alignSelf = _flexbox["default"].alignSelf,
    order = _flexbox["default"].order;
exports.order = order;
exports.alignSelf = alignSelf;
exports.justifySelf = justifySelf;
exports.flexBasis = flexBasis;
exports.flexShrink = flexShrink;
exports.flexGrow = flexGrow;
exports.flex = flex;
exports.flexDirection = flexDirection;
exports.flexWrap = flexWrap;
exports.justifyContent = justifyContent;
exports.justifyItems = justifyItems;
exports.alignContent = alignContent;
exports.alignItems = alignItems;
var gridGap = _grid["default"].gridGap,
    gridColumnGap = _grid["default"].gridColumnGap,
    gridRowGap = _grid["default"].gridRowGap,
    gridColumn = _grid["default"].gridColumn,
    gridRow = _grid["default"].gridRow,
    gridAutoFlow = _grid["default"].gridAutoFlow,
    gridAutoColumns = _grid["default"].gridAutoColumns,
    gridAutoRows = _grid["default"].gridAutoRows,
    gridTemplateColumns = _grid["default"].gridTemplateColumns,
    gridTemplateRows = _grid["default"].gridTemplateRows,
    gridTemplateAreas = _grid["default"].gridTemplateAreas,
    gridArea = _grid["default"].gridArea;
exports.gridArea = gridArea;
exports.gridTemplateAreas = gridTemplateAreas;
exports.gridTemplateRows = gridTemplateRows;
exports.gridTemplateColumns = gridTemplateColumns;
exports.gridAutoRows = gridAutoRows;
exports.gridAutoColumns = gridAutoColumns;
exports.gridAutoFlow = gridAutoFlow;
exports.gridRow = gridRow;
exports.gridColumn = gridColumn;
exports.gridRowGap = gridRowGap;
exports.gridColumnGap = gridColumnGap;
exports.gridGap = gridGap;
var borderWidth = _border["default"].borderWidth,
    borderStyle = _border["default"].borderStyle,
    borderColor = _border["default"].borderColor,
    borderTop = _border["default"].borderTop,
    borderRight = _border["default"].borderRight,
    borderBottom = _border["default"].borderBottom,
    borderLeft = _border["default"].borderLeft,
    borderRadius = _border["default"].borderRadius;
exports.borderRadius = borderRadius;
exports.borderLeft = borderLeft;
exports.borderBottom = borderBottom;
exports.borderRight = borderRight;
exports.borderTop = borderTop;
exports.borderColor = borderColor;
exports.borderStyle = borderStyle;
exports.borderWidth = borderWidth;
var backgroundImage = _background["default"].backgroundImage,
    backgroundSize = _background["default"].backgroundSize,
    backgroundPosition = _background["default"].backgroundPosition,
    backgroundRepeat = _background["default"].backgroundRepeat;
exports.backgroundRepeat = backgroundRepeat;
exports.backgroundPosition = backgroundPosition;
exports.backgroundSize = backgroundSize;
exports.backgroundImage = backgroundImage;
var zIndex = _position["default"].zIndex,
    top = _position["default"].top,
    right = _position["default"].right,
    bottom = _position["default"].bottom,
    left = _position["default"].left;
exports.left = left;
exports.bottom = bottom;
exports.right = right;
exports.top = top;
exports.zIndex = zIndex;