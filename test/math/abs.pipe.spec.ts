import {AbsPipe} from '../../src/math/abs.pipe';

describe('AbsPipe', () => {
  let pipe: AbsPipe;

  beforeEach(() => {
    pipe = new AbsPipe();
  });

  it('should return absolute values of any numbers inputted', () => {
    expect(pipe.transform(-123.45)).toEqual(123.45);
    expect(pipe.transform(123.45)).toEqual(123.45);
    expect(pipe.transform('-123.45')).toEqual(123.45);
    expect(pipe.transform('123.45')).toEqual(123.45);
  });

});
