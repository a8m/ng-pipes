import {IsDefinedPipe} from '../../src/boolean/is-defined.pipe';

describe('IsDefinedPipe', () => {
  let pipe: IsDefinedPipe;

  beforeEach(() => {
    pipe = new IsDefinedPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform('')).toBeTruthy();
    expect(pipe.transform(1)).toBeTruthy();
    expect(pipe.transform({})).toBeTruthy();
    expect(pipe.transform([])).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toBeFalsy();
  });

});
