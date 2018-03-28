import {IsGreaterThanOrEqualToPipe} from '../../src/boolean/is-greater-than-or-equal-to.pipe';

describe('IsGreaterThanOrEqualToPipe', () => {
  let pipe: IsGreaterThanOrEqualToPipe;

  beforeEach(() => {
    pipe = new IsGreaterThanOrEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 0)).toBeTruthy();
    expect(pipe.transform(1, 1)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(0, 1)).toBeFalsy();
  });

});
