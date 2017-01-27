import {IsUndefinedPipe} from '../../src/index';

describe('IsUndefinedPipe', () => {
  let pipe: IsUndefinedPipe;

  beforeEach(() => {
    pipe = new IsUndefinedPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(undefined)).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1)).toEqual(false);
    expect(pipe.transform('')).toEqual(false);
    expect(pipe.transform({})).toEqual(false);
    expect(pipe.transform([])).toEqual(false);
  });

});
