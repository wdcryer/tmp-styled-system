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
var core_1 = require("../../core");
var theme = {
    colors: {
        primary: 'rebeccapurple',
        secondary: 'papayawhip'
    },
    fontSize: [0, 4, 8, 16]
};
var parser = core_1.system({
    color: {
        property: 'color',
        scale: 'colors'
    },
    fontSize: true
});
test('uses default breakpoints', function () {
    var styles = parser({
        theme: theme,
        fontSize: [1, 2, 3],
        color: ['primary', null, 'secondary']
    });
    expect(styles).toEqual({
        color: 'rebeccapurple',
        fontSize: 4,
        '@media screen and (min-width: 40em)': {
            fontSize: 8
        },
        '@media screen and (min-width: 52em)': {
            fontSize: 16,
            color: 'papayawhip'
        }
    });
});
// Per default, we expect it to be impossible to override breakpoints
test('does *not* use dynamically changed breakpoints', function () {
    var styles = parser({
        theme: __assign(__assign({}, theme), { breakpoints: ['11em', '22em', '33em'] }),
        fontSize: [1, 2, 3],
        color: ['primary', null, 'secondary']
    });
    expect(styles).toEqual({
        color: 'rebeccapurple',
        fontSize: 4,
        '@media screen and (min-width: 40em)': {
            fontSize: 8
        },
        '@media screen and (min-width: 52em)': {
            fontSize: 16,
            color: 'papayawhip'
        }
    });
});
// With caching disabled, we expect it to be possible to change breakpoints
test('uses dynamically changed breakpoints', function () {
    var firstStyles = parser({
        theme: __assign(__assign({}, theme), { breakpoints: ['11em', '22em', '33em'], disableStyledSystemCache: true }),
        fontSize: [1, 2, 3],
        color: ['primary', null, 'secondary']
    });
    expect(firstStyles).toEqual({
        color: 'rebeccapurple',
        fontSize: 4,
        '@media screen and (min-width: 11em)': {
            fontSize: 8
        },
        '@media screen and (min-width: 22em)': {
            fontSize: 16,
            color: 'papayawhip'
        }
    });
    var secondStyles = parser({
        theme: __assign(__assign({}, theme), { breakpoints: ['9em', '8em', '7em'], disableStyledSystemCache: true }),
        fontSize: [1, 2, 3],
        color: ['primary', null, 'secondary']
    });
    expect(secondStyles).toEqual({
        color: 'rebeccapurple',
        fontSize: 4,
        '@media screen and (min-width: 9em)': {
            fontSize: 8
        },
        '@media screen and (min-width: 8em)': {
            fontSize: 16,
            color: 'papayawhip'
        }
    });
    var thirdStyles = parser({
        theme: theme,
        fontSize: [1, 2, 3],
        color: ['primary', null, 'secondary']
    });
    expect(thirdStyles).toEqual({
        color: 'rebeccapurple',
        fontSize: 4,
        '@media screen and (min-width: 9em)': {
            fontSize: 8
        },
        '@media screen and (min-width: 8em)': {
            fontSize: 16,
            color: 'papayawhip'
        }
    });
});
test('uses custom media query breakpoints', function () {
    var styles = parser({
        theme: {
            disableStyledSystemCache: true,
            fontSize: [0, 4, 8, 16],
            breakpoints: [
                '@media only screen and (pointer: fine)',
                '@media only screen and (pointer: coarse)',
            ]
        },
        fontSize: [1, 2, 3]
    });
    expect(styles).toEqual({
        fontSize: 4,
        '@media only screen and (pointer: fine)': {
            fontSize: 8
        },
        '@media only screen and (pointer: coarse)': {
            fontSize: 16
        }
    });
});
