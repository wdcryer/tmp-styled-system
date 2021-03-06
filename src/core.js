const assign = Object.assign;

export const merge = (a, b) => {
  const result = { ...a, ...b };
  for (const key in a) {
    if (!a[key] || typeof b[key] !== 'object') continue;

    result[key] = { ...a[key], ...b[key] };
  }
  return result;
};

// sort object-value responsive styles
const sort = obj => {
  const next = {};
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base'
      })
    )
    .forEach(key => {
      next[key] = obj[key];
    });
  return next;
};

const defaults = {
  breakpoints: [40, 52, 64].map(n => n + 'em')
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
const stringStartsWith = (str, search) =>
  str.substring(0, search.length) === search;

const createMediaQuery = n => {
  if (typeof n === 'string' && stringStartsWith(n, '@media ')) {
    return n;
  }
  return `@media screen and (min-width: ${n})`;
};
const getValue = (n, scale) => get(scale, n, n);

export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

export const createParser = config => {
  const cache = {};
  const parse = props => {
    let styles = {};
    let shouldSort = false;
    const isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (const key in props) {
      if (!config[key]) continue;
      const sx = config[key];
      const raw = props[key];
      const scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) ||
          get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = (!isCacheDisabled && cache.media) || [
            null,
            ...cache.breakpoints.map(createMediaQuery)
          ];
          styles = merge(
            styles,
            parseResponsiveStyle(cache.media, sx, scale, raw, props)
          );
          continue;
        }
        if (raw !== null) {
          // We have a style class
          if (raw.valueOf() !== raw) {
            styles = merge(styles, sx(raw, scale, props));
          } else {
            styles = merge(
              styles,
              parseResponsiveObject(cache.breakpoints, sx, scale, raw, props)
            );
          }
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

  const keys = Object.keys(config).filter(k => k !== 'config');
  if (keys.length > 1) {
    keys.forEach(key => {
      parse[key] = createParser({ [key]: config[key] });
    });
  }

  return parse;
};

const parseResponsiveStyle = (mediaQueries, sx, scale, raw, _props) => {
  let styles = {};
  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i];
    const style = sx(value, scale, _props);
    if (!media) {
      assign(styles, style);
    } else {
      assign(styles, {
        [media]: assign({}, styles[media], style)
      });
    }
  });
  return styles;
};

const parseResponsiveObject = (breakpoints, sx, scale, raw, _props) => {
  let styles = {};

  for (let key in raw) {
    const value = raw[key];
    const style = sx(value, scale, _props);
    // MATCH WILDCARD
    if (key.endsWith('*')) {
      // e.g. "tablet-*" becomes "tablet-"
      const subbpkey = key.substr(0, key.length - 1);

      for (const k in breakpoints) {
        const media = breakpoints[k];
        if (k.startsWith(subbpkey)) {
          // Apply the breakpoint value to the result['@media...'] object
          assign(styles, {
            [media]: assign({}, styles[media], style)
          });
        }
      }
      continue;
    }

    const breakpoint = breakpoints[key];

    if (!breakpoint) {
      assign(styles, style);
    } else {
      const media = createMediaQuery(breakpoint);
      assign(styles, {
        [media]: assign({}, styles[media], style)
      });
    }
  }

  return styles;
};

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale
}) => {
  properties = properties || [property];

  const sx = (value, scale, _props) => {
    const n = transform(value, scale, _props);
    if (n === null) {
      return undefined;
    }

    return properties.reduce((result, prop) => {
      result[prop] = n;
      return result;
    }, {});
  };
  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
};

// new v5 API
export const system = (args = {}) => {
  const config = {};

  // Iterate through each arg key, applying transforms based on the value type
  for (let key in args) {
    const value = args[key];
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

export const compose = (...parsers) => {
  const config = {};

  for (let i = 0, ii = parsers.length; i < ii; ++i) {
    const parser = parsers[i];

    if (parser && parser.config) {
      Object.assign(config, parser.config);
    }
  }

  return createParser(config);
};
