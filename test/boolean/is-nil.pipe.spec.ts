import {IsNilPipe} from '../../src/boolean/is-nil.pipe';

describe('IsNilPipe', () => {
  let pipe: IsNilPipe;

  beforeEach(() => {
    pipe = new IsNilPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(null)).toBeTruthy();
    expect(pipe.transform(undefined)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
    expect(pipe.transform([])).toBeFalsy();
  });

});
