import { variant, textStyle, colorStyle } from '../../variant';
import { system, compose } from '../../core';
var theme = {
  colors: {
    blue: '#07c',
    black: '#111'
  }
};
var fontSize = system({
  fontSize: true
});
var color = system({
  color: true
});
test('variant returns style objects from theme', function () {
  var buttons = variant({
    key: 'buttons'
  });
  var a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato'
        }
      }
    },
    variant: 'primary'
  });
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato'
  });
});
test('variant prop can be customized', function () {
  var buttons = variant({
    key: 'buttons',
    prop: 'type'
  });
  var a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato'
        }
      }
    },
    type: 'primary'
  });
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato'
  });
});
test('variant can be composed', function () {
  var system = compose(variant({
    key: 'typography'
  }), fontSize, color);
  var result = system({
    theme: {
      typography: {
        primary: {
          fontSize: '32px',
          color: '#fff'
        }
      }
    },
    variant: 'primary',
    color: '#111'
  });
  expect(result).toEqual({
    fontSize: '32px',
    color: '#111'
  });
});
test('textStyle prop returns theme.textStyles object', function () {
  var a = textStyle({
    theme: {
      textStyles: {
        heading: {
          fontWeight: 'bold',
          lineHeight: 1.25
        }
      }
    },
    textStyle: 'heading'
  });
  expect(a).toEqual({
    fontWeight: 'bold',
    lineHeight: 1.25
  });
});
test('colors prop returns theme.colorStyles object', function () {
  var a = colorStyle({
    theme: {
      colorStyles: {
        dark: {
          color: '#fff',
          backgroundColor: '#000'
        }
      }
    },
    colors: 'dark'
  });
  expect(a).toEqual({
    color: '#fff',
    backgroundColor: '#000'
  });
});
describe('component variant', function () {
  test('returns a variant defined inline', function () {
    var comp = variant({
      variants: {
        primary: {
          color: 'black',
          bg: 'tomato'
        },
        secondary: {
          color: 'white',
          bg: 'purple'
        }
      }
    });
    var primary = comp({
      variant: 'primary'
    });
    var secondary = comp({
      variant: 'secondary'
    });
    expect(primary).toEqual({
      color: 'black',
      backgroundColor: 'tomato'
    });
    expect(secondary).toEqual({
      color: 'white',
      backgroundColor: 'purple'
    });
  });
  test('returns theme-aware styles', function () {
    var comp = variant({
      variants: {
        primary: {
          p: 3,
          fontSize: 1,
          color: 'white',
          bg: 'primary'
        }
      }
    });
    var style = comp({
      variant: 'primary',
      theme: {
        colors: {
          primary: '#07c'
        }
      }
    });
    expect(style).toEqual({
      padding: 16,
      fontSize: 14,
      color: 'white',
      backgroundColor: '#07c'
    });
  });
  test('can use a custom prop name', function () {
    var comp = variant({
      prop: 'size',
      variants: {
        big: {
          fontSize: 32,
          fontWeight: 900,
          lineHeight: 1.25
        }
      }
    });
    var style = comp({
      size: 'big'
    });
    expect(style).toEqual({
      fontSize: 32,
      fontWeight: 900,
      lineHeight: 1.25
    });
  });
  test('does not throw when no variants are found', function () {
    var comp = variant({
      variants: {
        beep: {}
      }
    });
    var style;
    expect(function () {
      style = comp({
        variant: 'beep'
      });
    }).not.toThrow();
    expect(style).toEqual({});
  });
  test('returns empty object when no prop is provided', function () {
    var comp = variant({
      variants: {
        beep: {}
      }
    });
    var style = comp({});
    expect(style).toEqual({});
  });
  test('can be composed with other style props', function () {
    var parser = compose(variant({
      variants: {
        tomato: {
          color: 'tomato',
          fontSize: 20,
          fontWeight: 'bold'
        }
      }
    }), color, fontSize);
    var a = parser({
      variant: 'tomato'
    });
    var b = parser({
      variant: 'tomato',
      color: 'blue',
      fontSize: 32
    });
    expect(a).toEqual({
      color: 'tomato',
      fontSize: 20,
      fontWeight: 'bold'
    });
    expect(b).toEqual({
      color: 'blue',
      fontSize: 32,
      fontWeight: 'bold'
    });
  });
  test('theme-based variants override local variants', function () {
    var comp = variant({
      variants: {
        primary: {
          color: 'white',
          bg: 'blue'
        }
      },
      scale: 'buttons'
    });
    var style = comp({
      variant: 'primary',
      theme: {
        buttons: {
          primary: {
            color: 'black',
            bg: 'cyan'
          }
        }
      }
    });
    expect(style).toEqual({
      color: 'black',
      backgroundColor: 'cyan'
    });
  });
});