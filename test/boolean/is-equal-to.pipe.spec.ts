import {IsEqualToPipe} from '../../src/boolean/is-equal-to.pipe';

describe('IsEqualToPipe', () => {
  let pipe: IsEqualToPipe;

  beforeEach(() => {
    pipe = new IsEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 1)).toBeTruthy();
    expect(pipe.transform(1, '1')).toBeTruthy();
    expect(pipe.transform('1', '1')).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 2)).toBeFalsy();
    expect(pipe.transform(1, '2')).toBeFalsy();
    expect(pipe.transform('1', '2')).toBeFalsy();
  });

});
