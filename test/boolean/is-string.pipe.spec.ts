import {IsStringPipe} from '../../src/index';

describe('IsStringPipe', () => {
  let pipe: IsStringPipe;

  beforeEach(() => {
    pipe = new IsStringPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform('')).toEqual(true);
    expect(pipe.transform('a')).toEqual(true);
    expect(pipe.transform('a word')).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toEqual(false);
    expect(pipe.transform(1)).toEqual(false);
    expect(pipe.transform({})).toEqual(false);
    expect(pipe.transform([])).toEqual(false);
  });

});
