import {ConcatPipe} from '../../src/collection/concat.pipe';

describe('ConcatPipe', () => {
  let pipe: ConcatPipe;

  beforeEach(() => {
    pipe = new ConcatPipe();
  });

  it('should get 2 arrays as parameters and return merged one', () => {
    expect(pipe.transform([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pipe.transform([], [4, 5, 6])).toEqual([4, 5, 6]);
    expect(pipe.transform([true, false], [])).toEqual([true, false]);
    expect(pipe.transform([{a: 1}], [{a: 2}])).toEqual([{a: 1}, {a: 2}]);
  });

  it('should get a mixed parameters and return merged collection', () => {
    let array = [{a: 1}], object = {0: {a: 2}, 1: {a: 3}};
    expect(pipe.transform(array, object)).toEqual([{a: 1}, {a: 2}, {a: 3}]);
    expect(pipe.transform(object, array)).toEqual([{a: 2}, {a: 3}, {a: 1}]);
    expect(pipe.transform(object, object)).toEqual([{a: 2}, {a: 3}, {a: 2}, {a: 3}]);
    expect(pipe.transform(array, array)).toEqual([{a: 1}, {a: 1}]);
  });

});
