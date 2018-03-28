import {RangePipe} from '../../src/collection/range.pipe';

describe('RangePipe', () => {
  let pipe: RangePipe;

  beforeEach(() => {
    pipe = new RangePipe();
  });

  it('should return an array of 10 items', () => {
    expect(pipe.transform([], 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(pipe.transform([], 10).length).toEqual(10);
  });

  it('should return 10 items starting at 10 incrementing by 1', () => {
    expect(pipe.transform([], 10, 10)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    expect(pipe.transform([], 10).length).toEqual(10);
  });

  it('should return 10 items starting at 10 incrementing by 10 ', () => {
    expect(pipe.transform([], 10, 10, 10)).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    expect(pipe.transform([], 10).length).toEqual(10);
  });

  it('should return 10 items starting at 10 incrementing by 10 and multiplied by 2.', () => {
    expect(pipe.transform([], 10, 10, 10, (n: number) => n * 2)).toEqual([
      20, 40, 60, 80, 100, 120, 140, 160, 180, 200
    ]);
    expect(pipe.transform([], 10).length).toEqual(10);
  });

});
