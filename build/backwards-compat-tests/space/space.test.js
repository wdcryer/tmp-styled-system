"use strict";
exports.__esModule = true;
var space_1 = require("../../parsers/space");
test('returns style objects', function () {
    var styles = space_1.space({
        m: '4px'
    });
    expect(styles).toEqual({ margin: '4px' });
});
test('returns 0 values', function () {
    var styles = space_1.space({ m: 0 });
    expect(styles).toEqual({ margin: 0 });
});
test('returns negative pixel values', function () {
    var styles = space_1.space({ m: -2 });
    expect(styles).toEqual({ margin: -8 });
});
test('returns negative em values', function () {
    var styles = space_1.space({ m: '-16em' });
    expect(styles).toEqual({ margin: '-16em' });
});
test('returns negative theme values', function () {
    var styles = space_1.space({
        theme: {
            space: [0, 4, 8]
        },
        m: -2
    });
    expect(styles).toEqual({ margin: -8 });
});
test('returns positive theme values', function () {
    var styles = space_1.space({
        theme: {
            space: [0, '1em', '2em']
        },
        m: 2
    });
    expect(styles).toEqual({ margin: '2em' });
});
test('returns responsive values', function () {
    var styles = space_1.space({
        m: [0, 2, 3]
    });
    expect(styles).toEqual({
        margin: 0,
        '@media screen and (min-width: 40em)': { margin: 8 },
        '@media screen and (min-width: 52em)': { margin: 16 }
    });
});
test('returns aliased values', function () {
    var styles = space_1.space({
        px: 2
    });
    expect(styles).toEqual({ paddingLeft: 8, paddingRight: 8 });
});
test('returns string values from theme', function () {
    var styles = space_1.space({
        theme: {
            space: [0, '1em']
        },
        padding: 1
    });
    expect(styles).toEqual({ padding: '1em' });
});
test('returns negative string values from theme', function () {
    var styles = space_1.space({
        theme: {
            space: [0, '1em']
        },
        margin: -1
    });
    expect(styles).toEqual({ margin: '-1em' });
});
test('returns values from theme object', function () {
    var styles = space_1.space({
        theme: {
            space: { sm: 1 }
        },
        margin: 'sm'
    });
    expect(styles).toEqual({ margin: 1 });
});
test('pl prop sets paddingLeft', function () {
    var styles = space_1.space({ pl: 2 });
    expect(styles).toEqual({ paddingLeft: 8 });
});
test('pl prop sets paddingLeft 0', function () {
    var styles = space_1.space({ pl: 0 });
    expect(styles).toEqual({ paddingLeft: 0 });
});
test('px prop overrides pl prop', function () {
    var styles = space_1.space({
        pl: 1,
        px: 2
    });
    expect(styles).toEqual({ paddingLeft: 8, paddingRight: 8 });
});
test('py prop overrides pb prop', function () {
    var styles = space_1.space({
        pb: 1,
        py: 2
    });
    expect(styles).toEqual({ paddingTop: 8, paddingBottom: 8 });
});
test('mx prop overrides mr prop', function () {
    var styles = space_1.space({
        mr: 1,
        mx: 2
    });
    expect(styles).toEqual({ marginLeft: 8, marginRight: 8 });
});
test('my prop overrides mt prop', function () {
    var styles = space_1.space({
        mt: 1,
        my: 2
    });
    expect(styles).toEqual({ marginTop: 8, marginBottom: 8 });
});
test('margin overrides m prop', function () {
    var styles = space_1.space({
        m: 1,
        margin: 2
    });
    expect(styles).toEqual({ margin: 8 });
});
test('handles margin with no theme', function () {
    var styles = space_1.space({
        mt: 12
    });
    expect(styles).toEqual({
        marginTop: 12
    });
});
test('handles overriding margin/padding shortcut props', function () {
    var styles = space_1.space({
        m: 4,
        mx: 3,
        mr: 2,
        p: 4,
        py: 3,
        pt: 2
    });
    expect(styles).toEqual({
        margin: 32,
        marginLeft: 16,
        marginRight: 8,
        padding: 32,
        paddingBottom: 16,
        paddingTop: 8
    });
});
test('single directions override axes', function () {
    var styles = space_1.space({
        mx: 3,
        ml: 1,
        mr: 2,
        px: 3,
        pl: 1,
        pr: 2
    });
    expect(styles).toEqual({
        marginLeft: 4,
        marginRight: 8,
        paddingLeft: 4,
        paddingRight: 8
    });
});
test('supports object values', function () {
    var styles = space_1.space({
        m: {
            _: 0,
            0: 1,
            1: 2
        }
    });
    expect(styles).toEqual({
        margin: 0,
        '@media screen and (min-width: 40em)': {
            margin: 4
        },
        '@media screen and (min-width: 52em)': {
            margin: 8
        }
    });
});
test('supports non-array breakpoints', function () {
    var theme = {
        disableStyledSystemCache: true,
        breakpoints: {
            small: '40em',
            medium: '52em'
        }
    };
    var styles = space_1.space({
        theme: theme,
        p: {
            small: 2
        },
        m: {
            _: 0,
            small: 1,
            medium: 2
        }
    });
    expect(styles).toEqual({
        margin: 0,
        '@media screen and (min-width: 40em)': {
            margin: 4,
            padding: 8
        },
        '@media screen and (min-width: 52em)': {
            margin: 8
        }
    });
});
