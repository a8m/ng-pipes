import {IsNullPipe} from '../../src/boolean/is-null.pipe';

describe('IsNullPipe', () => {
  let pipe: IsNullPipe;

  beforeEach(() => {
    pipe = new IsNullPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(null)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
    expect(pipe.transform([])).toBeFalsy();
  });

});
