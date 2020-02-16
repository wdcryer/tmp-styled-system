"use strict";
exports.__esModule = true;
var core_1 = require("../core");
var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
exports.grid = core_1.system({
    gridGap: {
        property: 'gridGap',
        scale: 'space',
        defaultScale: defaultScale
    },
    gridColumnGap: {
        property: 'gridColumnGap',
        scale: 'space',
        defaultScale: defaultScale
    },
    gridRowGap: {
        property: 'gridRowGap',
        scale: 'space',
        defaultScale: defaultScale
    },
    gridColumn: true,
    gridRow: true,
    gridAutoFlow: true,
    gridAutoColumns: true,
    gridAutoRows: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    gridTemplateAreas: true,
    gridArea: true
});
exports["default"] = exports.grid;
