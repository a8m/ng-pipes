import {IsNumberPipe} from '../../src/index';

describe('IsNumberPipe', () => {
  let pipe: IsNumberPipe;

  beforeEach(() => {
    pipe = new IsNumberPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1)).toEqual(true);
    expect(pipe.transform(-1)).toEqual(true);
    expect(pipe.transform(NaN)).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toEqual(false);
    expect(pipe.transform(null)).toEqual(false);
    expect(pipe.transform('')).toEqual(false);
    expect(pipe.transform('1')).toEqual(false);
    expect(pipe.transform({})).toEqual(false);
    expect(pipe.transform([])).toEqual(false);
  });

});
