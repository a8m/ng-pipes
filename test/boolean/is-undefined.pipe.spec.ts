import {IsUndefinedPipe} from '../../src/index';

describe('IsUndefinedPipe', () => {
  let pipe: IsUndefinedPipe;

  beforeEach(() => {
    pipe = new IsUndefinedPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(undefined)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
    expect(pipe.transform([])).toBeFalsy();
  });

});
