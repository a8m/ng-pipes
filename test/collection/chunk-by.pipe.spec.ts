import {ChunkByPipe} from '../../src/collection/chunk-by.pipe';

describe('ChunkByPipe', () => {
  let pipe: ChunkByPipe;

  beforeEach(() => {
    pipe = new ChunkByPipe();
  });

  it('should collect data into fixed-length chunks or blocks', () => {
    expect(pipe.transform([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  it('should collect data into fixed-length chunks or blocks', () => {
    expect(pipe.transform([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  });

  it('should collect data into fixed-length chunks or blocks', () => {
    expect(pipe.transform(['a', 'b', 'c', 'd'], 4)).toEqual([['a', 'b', 'c', 'd']]);
  });

  it('should get an fill-value and complete blocks that less than `n`', () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 2, 0)).toEqual([[1, 2], [3, 4], [5, 0]]);
  });

  it('should get an fill-value and complete blocks that less than `n`', () => {
    expect(pipe.transform([1, 2, 3, 4], 3, 1)).toEqual([[1, 2, 3], [4, 1, 1]]);
  });

});
