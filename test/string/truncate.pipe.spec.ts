import {TruncatePipe} from '../../src/string/truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should cut a string if it is longer than the provided length', () => {
    expect(pipe.transform('lorem ipsum dolor sit amet', 5, '', false)).toEqual('lorem');
    expect(pipe.transform('lorem ipsum dolor sit amet', 11, '', false)).toEqual('lorem ipsum');
    expect(pipe.transform('lorem ipsum dolor sit amet', 50, '', false))
        .toEqual('lorem ipsum dolor sit amet');

    expect(pipe.transform('abcdef', 3, '', false)).toEqual('abc');
    expect(pipe.transform('abcd ef', 6, '', false)).toEqual('abcd e');
  });

  it('should not cut words in the middle if preserve is true', () => {
    expect(pipe.transform('lorem ipsum dolor sit amet', 7, '', true)).toEqual('lorem ipsum');
    expect(pipe.transform('lorem ipsum dolor sit amet', 13, '', true)).toEqual('lorem ipsum dolor');
    expect(pipe.transform('lorem ipsum dolor sit amet', 50, '', true))
        .toEqual('lorem ipsum dolor sit amet');

    expect(pipe.transform('abcdef', 3, '', true)).toEqual('abcdef');
    expect(pipe.transform('abcd ef', 6, '', true)).toEqual('abcd ef');
  });

  it('should append the provided prefix if a string has been cut', () => {
    expect(pipe.transform('lorem ipsum dolor sit amet', 7, '...', true)).toEqual('lorem ipsum...');
    expect(pipe.transform('lorem ipsum dolor sit amet', 13, '...', true))
        .toEqual('lorem ipsum dolor...');
    expect(pipe.transform('lorem ipsum dolor sit amet', 50, '...', true))
        .toEqual('lorem ipsum dolor sit amet');
  });

});
