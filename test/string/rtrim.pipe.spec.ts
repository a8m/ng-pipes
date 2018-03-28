import {RightTrimPipe} from '../../src/string/rtrim.pipe';

describe('RightTrimPipe', () => {
  let pipe: RightTrimPipe;

  beforeEach(() => {
    pipe = new RightTrimPipe();
  });

  it('should strip whitespace from the end of a string', () => {
    expect(pipe.transform('a    ')).toEqual('a');
    expect(pipe.transform('   foo bar   ')).toEqual('   foo bar');
    expect(pipe.transform('   ')).toEqual('');
  });

  it('should strip specific chars from the beginning of a string', () => {
    expect(pipe.transform('__a__', '__')).toEqual('__a');
    expect(pipe.transform('//foo bar//', '//')).toEqual('//foo bar');
    expect(pipe.transform('barfoobar', 'bar')).toEqual('barfoo');
    expect(pipe.transform('barfoobar', 'foo')).toEqual('barfoobar');
  });

});
