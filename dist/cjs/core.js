"use strict";

exports.__esModule = true;
exports.compose = exports.system = exports.createStyleFunction = exports.createParser = exports.get = exports.merge = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var assign = Object.assign;

var merge = function merge(a, b) {
  var result = _extends({}, a, {}, b);

  for (var key in a) {
    if (!a[key] || typeof b[key] !== 'object') continue;
    result[key] = _extends({}, a[key], {}, b[key]);
  }

  return result;
}; // sort object-value responsive styles


exports.merge = merge;

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

var stringStartsWith = function stringStartsWith(str, search) {
  return str.substring(0, search.length) === search;
};

var createMediaQuery = function createMediaQuery(n) {
  if (typeof n === 'string' && stringStartsWith(n, '@media ')) {
    return n;
  }

  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

exports.get = get;

var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          // We have a style class
          if (raw.valueOf() !== raw) {
            styles = merge(styles, sx(raw, scale, props));
          } else {
            styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          }

          shouldSort = true;
        }

        continue;
      }

      assign(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

exports.createParser = createParser;

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      assign(styles, style);
    } else {
      var _assign;

      assign(styles, (_assign = {}, _assign[media] = assign({}, styles[media], style), _assign));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var value = raw[key];
    var style = sx(value, scale, _props); // MATCH WILDCARD

    if (key.endsWith('*')) {
      // e.g. "tablet-*" becomes "tablet-"
      var subbpkey = key.substr(0, key.length - 1);

      for (var k in breakpoints) {
        var media = breakpoints[k];

        if (k.startsWith(subbpkey)) {
          var _assign2;

          // Apply the breakpoint value to the result['@media...'] object
          assign(styles, (_assign2 = {}, _assign2[media] = assign({}, styles[media], style), _assign2));
        }
      }

      continue;
    }

    var breakpoint = breakpoints[key];

    if (!breakpoint) {
      assign(styles, style);
    } else {
      var _assign3;

      var _media = createMediaQuery(breakpoint);

      assign(styles, (_assign3 = {}, _assign3[_media] = assign({}, styles[_media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
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
}; // new v5 API


exports.createStyleFunction = createStyleFunction;

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {}; // Iterate through each arg key, applying transforms based on the value type

  for (var key in args) {
    var value = args[key];

    if (value === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
    } else if (typeof value === 'function') {
      config[key] = value;
    } else {
      config[key] = createStyleFunction(value);
    }
  }

  return createParser(config);
};

exports.system = system;

var compose = function compose() {
  var config = {};

  for (var i = 0, ii = arguments.length; i < ii; ++i) {
    var parser = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (parser && parser.config) {
      Object.assign(config, parser.config);
    }
  }

  return createParser(config);
};

exports.compose = compose;