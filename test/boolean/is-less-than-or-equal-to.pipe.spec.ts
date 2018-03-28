import {IsLessThanOrEqualToPipe} from '../../src/boolean/is-less-than-or-equal-to.pipe';

describe('IsLessThanOrEqualToPipe', () => {
  let pipe: IsLessThanOrEqualToPipe;

  beforeEach(() => {
    pipe = new IsLessThanOrEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(0, 1)).toBeTruthy();
    expect(pipe.transform(1, 1)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 0)).toBeFalsy();
  });

});
