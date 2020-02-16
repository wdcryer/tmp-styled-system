"use strict";
exports.__esModule = true;
var styled_system_1 = require("../../styled-system");
// v4 style API shim
exports.style = function (_a) {
    var prop = _a.prop, cssProperty = _a.cssProperty, alias = _a.alias, key = _a.key, transformValue = _a.transformValue, scale = _a.scale, 
    // new api
    properties = _a.properties;
    var config = {};
    config[prop] = styled_system_1.createStyleFunction({
        properties: properties,
        property: cssProperty || prop,
        scale: key,
        defaultScale: scale,
        transform: transformValue
    });
    if (alias)
        config[alias] = config[prop];
    var parse = styled_system_1.createParser(config);
    return parse;
};
