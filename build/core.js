"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var assign = Object.assign;
exports.merge = function (a, b) {
    var _a;
    var result = assign({}, a, b);
    for (var key in a) {
        if (!a[key] || typeof b[key] !== 'object')
            continue;
        assign(result, (_a = {},
            _a[key] = assign(a[key], b[key]),
            _a));
    }
    return result;
};
// sort object-value responsive styles
var sort = function (obj) {
    var next = {};
    Object.keys(obj)
        .sort(function (a, b) { return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base'
    }); })
        .forEach(function (key) {
        next[key] = obj[key];
    });
    return next;
};
var defaults = {
    breakpoints: [40, 52, 64].map(function (n) { return n + 'em'; })
};
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
var getValue = function (n, scale) { return exports.get(scale, n, n); };
exports.get = function (obj, key, def, p, undef) {
    key = key && key.split ? key.split('.') : [key];
    for (p = 0; p < key.length; p++) {
        obj = obj ? obj[key[p]] : undef;
    }
    return obj === undef ? def : obj;
};
exports.createParser = function (config) {
    var cache = {};
    var parse = function (props) {
        var styles = {};
        var shouldSort = false;
        var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;
        for (var key in props) {
            if (!config[key])
                continue;
            var sx = config[key];
            var raw = props[key];
            var scale = exports.get(props.theme, sx.scale, sx.defaults);
            if (typeof raw === 'object') {
                cache.breakpoints =
                    (!isCacheDisabled && cache.breakpoints) ||
                        exports.get(props.theme, 'breakpoints', defaults.breakpoints);
                if (Array.isArray(raw)) {
                    cache.media = (!isCacheDisabled && cache.media) || __spreadArrays([
                        null
                    ], cache.breakpoints.map(createMediaQuery));
                    styles = exports.merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
                    continue;
                }
                if (raw !== null) {
                    styles = exports.merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
                    shouldSort = true;
                }
                continue;
            }
            assign(styles, sx(raw, scale, props));
        }
        // sort object-based responsive styles
        if (shouldSort) {
            styles = sort(styles);
        }
        return styles;
    };
    parse.config = config;
    parse.propNames = Object.keys(config);
    parse.cache = cache;
    var keys = Object.keys(config).filter(function (k) { return k !== 'config'; });
    if (keys.length > 1) {
        keys.forEach(function (key) {
            var _a;
            parse[key] = exports.createParser((_a = {}, _a[key] = config[key], _a));
        });
    }
    return parse;
};
var parseResponsiveStyle = function (mediaQueries, sx, scale, raw, _props) {
    var styles = {};
    raw.slice(0, mediaQueries.length).forEach(function (value, i) {
        var _a;
        var media = mediaQueries[i];
        var style = sx(value, scale, _props);
        if (!media) {
            assign(styles, style);
        }
        else {
            assign(styles, (_a = {},
                _a[media] = assign({}, styles[media], style),
                _a));
        }
    });
    return styles;
};
var parseResponsiveObject = function (breakpoints, sx, scale, raw, _props) {
    var _a;
    var styles = {};
    for (var key in raw) {
        var breakpoint = breakpoints[key];
        var value = raw[key];
        var style = sx(value, scale, _props);
        if (!breakpoint) {
            assign(styles, style);
        }
        else {
            var media = createMediaQuery(breakpoint);
            assign(styles, (_a = {},
                _a[media] = assign({}, styles[media], style),
                _a));
        }
    }
    return styles;
};
exports.createStyleFunction = function (_a) {
    var properties = _a.properties, property = _a.property, scale = _a.scale, _b = _a.transform, transform = _b === void 0 ? getValue : _b, defaultScale = _a.defaultScale;
    properties = properties || [property];
    var sx = function (value, scale, _props) {
        var n = transform(value, scale, _props);
        if (n === null) {
            return undefined;
        }
        return properties.reduce(function (result, prop) {
            result[prop] = n;
            return result;
        }, {});
    };
    sx.scale = scale;
    sx.defaults = defaultScale;
    return sx;
};
// new v5 API
exports.system = function (args) {
    if (args === void 0) { args = {}; }
    var config = {};
    // Iterate through each arg key, applying transforms based on the value type
    for (var key in args) {
        var value = args[key];
        if (value === true) {
            // shortcut definition
            config[key] = exports.createStyleFunction({
                property: key,
                scale: key
            });
        }
        else if (typeof value === 'function') {
            config[key] = value;
        }
        else {
            config[key] = exports.createStyleFunction(value);
        }
    }
    return exports.createParser(config);
};
exports.compose = function () {
    var parsers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parsers[_i] = arguments[_i];
    }
    var config = {};
    for (var i = 0, ii = parsers.length; i < ii; ++i) {
        var parser = parsers[i];
        if (parser && parser.config) {
            Object.assign(config, parser.config);
        }
    }
    return exports.createParser(config);
};
