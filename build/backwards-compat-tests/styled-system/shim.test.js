"use strict";
exports.__esModule = true;
var legacy_1 = require("./legacy");
var styled_system_1 = require("../../styled-system");
var width = legacy_1.style({
    prop: 'width'
});
var color = legacy_1.style({
    prop: 'color',
    key: 'colors'
});
var backgroundColor = legacy_1.style({
    prop: 'backgroundColor',
    alias: 'bg',
    key: 'colors'
});
var theme = {
    colors: {
        blue: '#07c',
        black: '#111'
    }
};
test('returns a style function', function () {
    var func = legacy_1.style({ prop: 'width' });
    expect(typeof func).toBe('function');
});
test('function returns a style object', function () {
    var style = width({ width: '50%' });
    expect(style).toEqual({
        width: '50%'
    });
});
test('returns values from theme', function () {
    var style = color({ theme: theme, color: 'blue' });
    expect(style).toEqual({
        color: '#07c'
    });
});
test('handles aliased props', function () {
    var style = backgroundColor({
        theme: theme,
        bg: 'blue'
    });
    expect(style).toEqual({
        backgroundColor: '#07c'
    });
});
test('returns 0', function () {
    var style = width({ width: 0 });
    expect(style).toEqual({ width: 0 });
});
test('returns responsive style objects', function () {
    var style = width({
        width: ['100%', '50%']
    });
    expect(style).toEqual({
        width: '100%',
        '@media screen and (min-width: 40em)': { width: '50%' }
    });
});
test('returns responsive style objects for all breakpoints', function () {
    var style = width({
        width: ['100%', '75%', '50%', '33%', '25%']
    });
    expect(style).toEqual({
        width: '100%',
        '@media screen and (min-width: 40em)': { width: '75%' },
        '@media screen and (min-width: 52em)': { width: '50%' },
        '@media screen and (min-width: 64em)': { width: '33%' }
    });
});
test('skips undefined responsive values', function () {
    var style = width({
        width: ['100%', , '50%']
    });
    expect(style).toEqual({
        width: '100%',
        '@media screen and (min-width: 52em)': { width: '50%' }
    });
});
test('parses object values', function () {
    var style = width({
        width: {
            _: '100%',
            2: '50%'
        }
    });
    expect(style).toEqual({
        width: '100%',
        '@media screen and (min-width: 64em)': { width: '50%' }
    });
});
test('array values longer than breakpoints does not reset returned style object', function () {
    var a = width({
        width: ['100%', , , , , '50%', '25%']
    });
    expect(a).toEqual({ width: '100%' });
});
test('shimmed width only supports width prop', function () {
    var a = styled_system_1.width({
        width: 1,
        height: 32,
        maxWidth: 768
    });
    expect(a).toEqual({ width: '100%' });
});
