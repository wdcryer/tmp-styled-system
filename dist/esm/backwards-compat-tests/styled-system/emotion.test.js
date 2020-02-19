import React from 'react';
import renderer from 'react-test-renderer';
import serializer, { matchers } from 'jest-emotion';
import styled from '@emotion/styled';
import { space } from '../../styled-system';
expect.extend(matchers);
expect.addSnapshotSerializer(serializer);

var render = function render(el) {
  return renderer.create(el).toJSON();
};

describe('emotion', function () {
  test('default props can be overridden', function () {
    var Box = styled('div')(space);
    Box.defaultProps = {
      px: 0,
      py: 0
    };
    var json = render(React.createElement(Box, {
      px: 2,
      py: 1
    }));
    expect(json).toHaveStyleRule('padding-left', '8px');
    expect(json).toHaveStyleRule('padding-right', '8px');
    expect(json).toHaveStyleRule('padding-top', '4px');
    expect(json).toHaveStyleRule('padding-bottom', '4px');
  });
  test('responsive styles are rendered in the correct order', function () {
    var Box = styled('div')(space);
    var json = render(React.createElement(Box, {
      m: [1, null, 3],
      p: [1, 2, 3]
    }));
    expect(json).toMatchSnapshot();
  });
  test('object breakpoints work with defaultProps', function () {
    var Box = styled('div')(space);
    var theme = {
      disableStyledSystemCache: true,
      breakpoints: {
        small: '32em',
        medium: '40em'
      }
    };
    Box.defaultProps = {
      theme: theme,
      p: {
        _: 0,
        medium: 4
      },
      m: {
        small: 2,
        medium: 3
      }
    };
    var json = render(React.createElement(Box, null));
    expect(json).toMatchSnapshot();
  });
});