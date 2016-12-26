import { AbsPipe } from '../../src/index';

describe('AbsPipe', () => {
  let pipe: AbsPipe;
  beforeEach(() => {
    pipe = new AbsPipe();
  });

  it('should return absolute values of any numbers inputted', function() {
    expect(pipe.transform(-123.45)).toEqual(123.45);
    expect(pipe.transform(123.45)).toEqual(123.45);
    expect(pipe.transform('-123.45')).toEqual(123.45);
    expect(pipe.transform('123.45')).toEqual(123.45);
  });
});
