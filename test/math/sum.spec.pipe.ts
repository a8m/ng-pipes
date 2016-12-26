import { SumPipe } from '../../src/index';

describe('SumPipe', () => {
  let pipe: SumPipe;
  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('should return the sum of all members in array', function() {
    expect(pipe.transform([1, 2, 3, 4, 5, 6])).toEqual(21);
    expect(pipe.transform([0, 0, 0, 0, 0, 1])).toEqual(1);
  });

  it('should be able to get an initial value', function() {
    expect(pipe.transform([2, 3, 5], 10)).toEqual(20);
    expect(pipe.transform([2, 3, 5], -10)).toEqual(0);
  });
});
