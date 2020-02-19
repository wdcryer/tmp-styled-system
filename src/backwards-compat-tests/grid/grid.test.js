import grid from '../../parsers/grid';

test('returns grid styles', () => {
  const style = grid({
    gridGap: 32
  });
  expect(style).toEqual({
    gridGap: 32
  });
});
