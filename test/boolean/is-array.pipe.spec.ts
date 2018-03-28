import {IsArrayPipe} from '../../src/boolean/is-array.pipe';

describe('IsArrayPipe', () => {
  let pipe: IsArrayPipe;

  beforeEach(() => {
    pipe = new IsArrayPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform([])).toBeTruthy();
    expect(pipe.transform([1, 2])).toBeTruthy();
    expect(pipe.transform([null])).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
  });

});
