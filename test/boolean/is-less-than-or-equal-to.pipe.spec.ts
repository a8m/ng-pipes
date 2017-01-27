import {IsLessThanOrEqualToPipe} from '../../src/index';

describe('IsLessThanOrEqualToPipe', () => {
  let pipe: IsLessThanOrEqualToPipe;

  beforeEach(() => {
    pipe = new IsLessThanOrEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(0, 1)).toEqual(true);
    expect(pipe.transform(1, 1)).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 0)).toEqual(false);
  });

});
