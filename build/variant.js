"use strict";
exports.__esModule = true;
var core_1 = require("./core");
var css_1 = require("./css");
exports.variant = function (_a) {
    var _b;
    var scale = _a.scale, _c = _a.prop, prop = _c === void 0 ? 'variant' : _c, 
    // enables new api
    _d = _a.variants, 
    // enables new api
    variants = _d === void 0 ? {} : _d, 
    // shim for v4 API
    key = _a.key;
    var sx;
    if (Object.keys(variants).length) {
        sx = function (value, scale, props) { return css_1["default"](core_1.get(scale, value, null))(props.theme); };
    }
    else {
        sx = function (value, scale) { return core_1.get(scale, value, null); };
    }
    sx.scale = scale || key;
    sx.defaults = variants;
    var config = (_b = {},
        _b[prop] = sx,
        _b);
    var parser = core_1.createParser(config);
    return parser;
};
exports["default"] = exports.variant;
exports.buttonStyle = exports.variant({ key: 'buttons' });
exports.textStyle = exports.variant({ key: 'textStyles', prop: 'textStyle' });
exports.colorStyle = exports.variant({ key: 'colorStyles', prop: 'colors' });
