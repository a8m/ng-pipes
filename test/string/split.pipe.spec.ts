import {SplitPipe} from '../../src/string/split.pipe';

describe('SplitPipe', () => {
  let pipe: SplitPipe;

  beforeEach(() => {
    pipe = new SplitPipe();
  });

  it('should split a string with default separator', () => {
    expect(pipe.transform('')).toEqual(['']);
    expect(pipe.transform('a')).toEqual(['a']);
    expect(pipe.transform('a little sentence')).toEqual(['a', 'little', 'sentence']);
  });

  it('should split a string with custom separator', () => {
    expect(pipe.transform('a.little.sentence', '.')).toEqual(['a', 'little', 'sentence']);
    expect(pipe.transform('a-little-sentence', '-')).toEqual(['a', 'little', 'sentence']);
  });

  it('should split a string with specific limit', () => {
    expect(pipe.transform('a.little.sentence', '.', 2)).toEqual(['a', 'little']);
    expect(pipe.transform('a.little.sentence', '.', 10)).toEqual(['a', 'little', 'sentence']);
    expect(pipe.transform('a medium sentence here in test', ' ', 4)).toEqual([
      'a', 'medium', 'sentence', 'here'
    ]);
  });

  it('should return the input unchanged', () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
