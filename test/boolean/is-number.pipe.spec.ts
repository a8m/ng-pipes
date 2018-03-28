import {IsNumberPipe} from '../../src/boolean/is-number.pipe';

describe('IsNumberPipe', () => {
  let pipe: IsNumberPipe;

  beforeEach(() => {
    pipe = new IsNumberPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1)).toBeTruthy();
    expect(pipe.transform(-1)).toBeTruthy();
    expect(pipe.transform(NaN)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform('1')).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
    expect(pipe.transform([])).toBeFalsy();
  });

});
