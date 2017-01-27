import {IsEqualToPipe} from '../../src/index';

describe('IsEqualToPipe', () => {
  let pipe: IsEqualToPipe;

  beforeEach(() => {
    pipe = new IsEqualToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 1)).toEqual(true);
    expect(pipe.transform(1, '1')).toEqual(true);
    expect(pipe.transform('1', '1')).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 2)).toEqual(false);
    expect(pipe.transform(1, '2')).toEqual(false);
    expect(pipe.transform('1', '2')).toEqual(false);
  });

});
