"use strict";
exports.__esModule = true;
var core_1 = require("./core");
exports.themeGet = function (path, fallback) {
    if (fallback === void 0) { fallback = null; }
    return function (props) {
        return core_1.get(props.theme, path, fallback);
    };
};
exports["default"] = exports.themeGet;
