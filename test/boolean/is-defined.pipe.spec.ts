import {IsDefinedPipe} from '../../src/index';

describe('IsDefinedPipe', () => {
  let pipe: IsDefinedPipe;

  beforeEach(() => {
    pipe = new IsDefinedPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform('')).toEqual(true);
    expect(pipe.transform(1)).toEqual(true);
    expect(pipe.transform({})).toEqual(true);
    expect(pipe.transform([])).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toEqual(false);
  });

});
