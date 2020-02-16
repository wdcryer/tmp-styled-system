"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// based on https://github.com/developit/dlv
exports.get = function (obj, key, def, p, undef) {
    key = key && key.split ? key.split('.') : [key];
    for (p = 0; p < key.length; p++) {
        obj = obj ? obj[key[p]] : undef;
    }
    return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) { return n + 'em'; });
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
var positiveOrNegative = function (scale, value) {
    if (typeof value !== 'number' || value >= 0) {
        return exports.get(scale, value, value);
    }
    var absolute = Math.abs(value);
    var n = exports.get(scale, absolute, absolute);
    if (typeof n === 'string')
        return '-' + n;
    return n * -1;
};
var transforms = [
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'top',
    'bottom',
    'left',
    'right',
].reduce(function (acc, curr) {
    acc[curr] = positiveOrNegative;
    return acc;
}, {});
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
var stringStartsWith = function (str, search) {
    return str.substring(0, search.length) === search;
};
var createMediaQuery = function (n) {
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
var createMediaQueries = function (breakpoints) {
    /**
     * Convert to array if not already. E.g:
     * {
     *   key-0: '@media ...',
     *   key-1: '20em',
     * }
     * => ['@media ...', '20em']
     */
    breakpoints = !Array.isArray(breakpoints)
        ? Object.values(breakpoints)
        : breakpoints;
    var mediaQueries = Array(breakpoints.length + 1);
    mediaQueries[0] = null;
    for (var i = 1, ii = mediaQueries.length; i < ii; ++i) {
        mediaQueries[i] = createMediaQuery(breakpoints[i - 1]);
    }
    return mediaQueries;
};
exports.responsive = function (styles) { return function (theme) {
    var next = {};
    var breakpoints = exports.get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = createMediaQueries(breakpoints);
    for (var key in styles) {
        var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
        if (value == null)
            continue;
        if (!Array.isArray(value)) {
            next[key] = value;
            if (typeof breakpoints === 'object' && typeof value === 'object') {
                // It's possible this object is simply a nested selector,
                // such as `h1: {...}`, and not a breakpoint object
                var isBreakpointObj = false;
                for (var bpkey in value) {
                    var media = breakpoints[bpkey];
                    // Check if key is a breakpoint key
                    if (!media) {
                        continue;
                    }
                    isBreakpointObj = true;
                    // Apply the breakpoint value to the result['@media...'] object
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
        var length_1 = value.slice(0, mediaQueries.length).length;
        for (var i = 0; i < length_1; i++) {
            var media = mediaQueries[i];
            if (value[i] == null)
                continue;
            if (!media) {
                next[key] = value[i];
                continue;
            }
            next[media] = next[media] || {};
            next[media][key] = value[i];
        }
    }
    return next;
}; };
exports.css = function (args) { return function (props) {
    if (props === void 0) { props = {}; }
    var theme = __assign(__assign({}, defaultTheme), (props.theme || props));
    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = exports.responsive(obj)(theme);
    for (var key in styles) {
        var x = styles[key];
        var val = typeof x === 'function' ? x(theme) : x;
        if (key === 'variant') {
            var variant = exports.css(exports.get(theme, val))(theme);
            result = __assign(__assign({}, result), variant);
            continue;
        }
        if (val && typeof val === 'object') {
            result[key] = exports.css(val)(theme);
            continue;
        }
        var prop = exports.get(aliases, key, key);
        var scaleName = exports.get(scales, prop);
        var scale = exports.get(theme, scaleName, exports.get(theme, prop, {}));
        var transform = exports.get(transforms, prop, exports.get);
        var value = transform(scale, val, val);
        if (multiples[prop]) {
            var dirs = multiples[prop];
            for (var i = 0; i < dirs.length; i++) {
                result[dirs[i]] = value;
            }
        }
        else {
            result[prop] = value;
        }
    }
    return result;
}; };
exports["default"] = exports.css;
