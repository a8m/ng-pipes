import {IsGreaterThanOrEqualToPipe} from '../../src/index';

describe('IsGreaterThanOrEqualToPipe', () => {
  let pipe: IsGreaterThanOrEqualToPipe;

  beforeEach(() => {
    pipe = new IsGreaterThanOrEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 0)).toEqual(true);
    expect(pipe.transform(1, 1)).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(0, 1)).toEqual(false);
  });

});
