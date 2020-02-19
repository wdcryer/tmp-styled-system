import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';
import { space, color } from '../../styled-system';

var render = function render(el) {
  return renderer.create(el).toJSON();
};

describe('styled-components', function () {
  test('default props can be overridden', function () {
    var Box = styled('div')(space);
    Box.defaultProps = {
      m: 0,
      px: 0,
      py: 0
    };
    var json = render(React.createElement(Box, {
      px: 2,
      m: 4
    }));
    expect(json).toHaveStyleRule('padding-left', '8px');
    expect(json).toHaveStyleRule('padding-right', '8px');
    expect(json).toHaveStyleRule('padding-top', '0');
    expect(json).toHaveStyleRule('padding-bottom', '0');
    expect(json).toHaveStyleRule('margin', '32px');
  });
  test('extended components keep their props', function () {
    var Box = styled('div')(space);
    var Card = styled(Box)(color);
    var json = render(React.createElement(Card, {
      m: 3,
      color: "tomato"
    }));
    expect(json).toHaveStyleRule('margin', '16px');
    expect(json).toHaveStyleRule('color', 'tomato');
  });
  test('extended components keep their props with as prop', function () {
    var Box = styled('div')(space);
    var Card = styled(Box)(color);
    var json = render(React.createElement(Card, {
      as: "header",
      m: 3,
      color: "tomato"
    }));
    expect(json).toHaveStyleRule('margin', '16px');
    expect(json).toHaveStyleRule('color', 'tomato');
  });
  test('responsive styles are rendered in the correct order', function () {
    var Box = styled('div')(space);
    var json = render(React.createElement(Box, {
      m: [1, 2, 3],
      p: [1, 2, 3]
    }));
    expect(json).toMatchSnapshot();
  });
});