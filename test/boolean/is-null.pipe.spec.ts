import {IsNullPipe} from '../../src/index';

describe('IsNullPipe', () => {
  let pipe: IsNullPipe;

  beforeEach(() => {
    pipe = new IsNullPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(null)).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toEqual(false);
    expect(pipe.transform(1)).toEqual(false);
    expect(pipe.transform('')).toEqual(false);
    expect(pipe.transform({})).toEqual(false);
    expect(pipe.transform([])).toEqual(false);
  });

});
