import {IsNotEqualToPipe} from '../../src/index';

describe('IsNotEqualToPipe', () => {
  let pipe: IsNotEqualToPipe;

  beforeEach(() => {
    pipe = new IsNotEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 2)).toEqual(true);
    expect(pipe.transform(1, '2')).toEqual(true);
    expect(pipe.transform('1', '2')).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 1)).toEqual(false);
    expect(pipe.transform(1, '1')).toEqual(false);
    expect(pipe.transform('1', '1')).toEqual(false);
  });

});
7