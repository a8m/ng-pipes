import {IsLessThanPipe} from '../../src/index';

describe('IsLessThanPipe', () => {
  let pipe: IsLessThanPipe;

  beforeEach(() => {
    pipe = new IsLessThanPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(0, 1)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 0)).toBeFalsy();
    expect(pipe.transform(1, 1)).toBeFalsy();
  });

});
