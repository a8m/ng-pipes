import {IsIdenticalToPipe} from '../../src/boolean/is-identical-to.pipe';

describe('IsIdenticalToPipe', () => {
  let pipe: IsIdenticalToPipe;

  beforeEach(() => {
    pipe = new IsIdenticalToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 1)).toBeTruthy();
    expect(pipe.transform('1', '1')).toBeTruthy();
    expect(pipe.transform([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(pipe.transform({'key': 2}, {'key': 2})).toBeTruthy();
    expect(pipe.transform([{'key': 2}, {'key': 4}], [{'key': 2}, {'key': 4}])).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 2)).toBeFalsy();
    expect(pipe.transform('1', '2')).toBeFalsy();
    expect(pipe.transform([1, 2, 3], [4, 2, 3])).toBeFalsy();
    expect(pipe.transform({'key': 2}, {'key': 4})).toBeFalsy();
    expect(pipe.transform([{'key': 4}, {'key': 2}], [{'key': 2}, {'key': 4}])).toBeFalsy();
  });

});
