import {IsGreaterThanPipe} from '../../src/boolean/is-greater-than.pipe';

describe('IsGreaterThanPipe', () => {
  let pipe: IsGreaterThanPipe;

  beforeEach(() => {
    pipe = new IsGreaterThanPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 0)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(0, 1)).toBeFalsy();
    expect(pipe.transform(1, 1)).toBeFalsy();
  });

});
