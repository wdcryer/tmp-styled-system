"use strict";

exports.__esModule = true;
exports["default"] = exports.css = exports.responsive = exports.get = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

exports.get = get;
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  acc[curr] = positiveOrNegative;
  return acc;
}, {}); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

var stringStartsWith = function stringStartsWith(str, search) {
  return str.substring(0, search.length) === search;
};

var createMediaQuery = function createMediaQuery(n) {
  if (typeof n === 'string' && stringStartsWith(n, '@media ')) {
    return n;
  }

  return "@media screen and (min-width: " + n + ")";
};
/**
 * Convert breakpoints into an array of media queries
 * @param {array|object} breakpoints
 * @returns {array}
 */


var createMediaQueries = function createMediaQueries(breakpoints) {
  /**
   * Convert to array if not already. E.g:
   * {
   *   key-0: '@media ...',
   *   key-1: '20em',
   * }
   * => ['@media ...', '20em']
   */
  breakpoints = !Array.isArray(breakpoints) ? Object.values(breakpoints) : breakpoints;
  var mediaQueries = Array(breakpoints.length + 1);
  mediaQueries[0] = null;

  for (var i = 1, ii = mediaQueries.length; i < ii; ++i) {
    mediaQueries[i] = createMediaQuery(breakpoints[i - 1]);
  }

  return mediaQueries;
};

var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = createMediaQueries(breakpoints);

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;

        if (typeof breakpoints === 'object' && typeof value === 'object') {
          // It's possible this object is simply a nested selector,
          // such as `h1: {...}`, and not a breakpoint object
          var isBreakpointObj = false;

          for (var bpkey in value) {
            // MATCH WILDCARD
            if (bpkey.endsWith('*')) {
              // e.g. "tablet-*" becomes "tablet-"
              var subbpkey = bpkey.substr(0, bpkey.length - 1);

              for (var k in breakpoints) {
                var _media = breakpoints[k];

                if (k.startsWith(subbpkey)) {
                  isBreakpointObj = true; // Apply the breakpoint value to the result['@media...'] object

                  next[_media] = next[_media] || {};
                  next[_media][key] = value[bpkey];
                }
              }

              continue;
            }

            var media = breakpoints[bpkey]; // Check if key is a breakpoint key

            if (!media) {
              continue;
            }

            isBreakpointObj = true; // Apply the breakpoint value to the result['@media...'] object

            next[media] = next[media] || {};
            next[media][key] = value[bpkey];
          }

          if (isBreakpointObj) {
            // Replace the result object with the default value (can be undefined)
            next[key] = next[key]._;
          }
        }

        continue;
      }

      var length = value.slice(0, mediaQueries.length).length;

      for (var i = 0; i < length; i++) {
        var _media2 = mediaQueries[i];
        if (value[i] == null) continue;

        if (!_media2) {
          next[key] = value[i];
          continue;
        }

        next[_media2] = next[_media2] || {};
        next[_media2][key] = value[i];
      }
    }

    return next;
  };
};

exports.responsive = responsive;

var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

exports.css = css;
var _default = css;
exports["default"] = _default;