import {IsStringPipe} from '../../src/boolean/is-string.pipe';

describe('IsStringPipe', () => {
  let pipe: IsStringPipe;

  beforeEach(() => {
    pipe = new IsStringPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform('')).toBeTruthy();
    expect(pipe.transform('a')).toBeTruthy();
    expect(pipe.transform('a word')).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
    expect(pipe.transform([])).toBeFalsy();
  });

});
