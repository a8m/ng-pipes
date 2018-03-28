import {FlattenPipe} from '../../src/collection/flatten.pipe';

describe('FlattenPipe', () => {
  let pipe: FlattenPipe;

  beforeEach(() => {
    pipe = new FlattenPipe();
  });

  it('should get a multiple nested array and return it flatten', () => {
    expect(pipe.transform([[[[[0]]]]])).toEqual([0]);

    expect(pipe.transform([[], 'A', 'B', ['C', 'D'], ['E', ['F'], []]])).toEqual([
      'A', 'B', 'C', 'D', 'E', 'F'
    ]);

    expect(pipe.transform([[[[null]]], [[null]], [null]])).toEqual([null, null, null]);

    expect(pipe.transform([
      [], 1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, [12, [[[[[13], [[[[14, 15]]]]]]]]]]]]
    ])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('should have ability to get object as a collection', () => {
    expect(pipe.transform({0: 1, 1: 2, 2: [3, 4], 3: [5, [6, 7, [8]]]})).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8
    ]);
    expect(pipe.transform({})).toEqual([]);
  });

  it('should flattened a single level, if shallow set to true', () => {
    expect(pipe.transform(
               ['out', ['out', ['in']], ['out', 'out', ['in', 'in']], ['out', 'out']], true))
        .toEqual(['out', 'out', ['in'], 'out', 'out', ['in', 'in'], 'out', 'out']);
    expect(pipe.transform([[], 1, [1, [0, [0, [0]]], 1, [0]], 1, [1, [0]]], true)).toEqual([
      1, 1, [0, [0, [0]]], 1, [0], 1, 1, [0]
    ]);
  });

});
