"use strict";
exports.__esModule = true;
var core_1 = require("../core");
var backgroundImage = true;
var backgroundSize = true;
var backgroundPosition = true;
var backgroundRepeat = true;
exports.background = core_1.system({
    background: true,
    backgroundImage: backgroundImage,
    backgroundSize: backgroundSize,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    // alias
    bgImage: backgroundImage,
    bgSize: backgroundSize,
    bgPosition: backgroundPosition,
    bgRepeat: backgroundRepeat
});
exports["default"] = exports.background;
