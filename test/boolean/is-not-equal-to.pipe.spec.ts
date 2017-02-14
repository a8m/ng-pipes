import {IsNotEqualToPipe} from '../../src/index';

describe('IsNotEqualToPipe', () => {
  let pipe: IsNotEqualToPipe;

  beforeEach(() => {
    pipe = new IsNotEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 2)).toBeTruthy();
    expect(pipe.transform(1, '2')).toBeTruthy();
    expect(pipe.transform('1', '2')).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 1)).toBeFalsy();
    expect(pipe.transform(1, '1')).toBeFalsy();
    expect(pipe.transform('1', '1')).toBeFalsy();
  });

});
