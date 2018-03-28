import {TrimPipe} from '../../src/string/trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it('should strip whitespace from the end of a string', () => {
    expect(pipe.transform('a    ')).toEqual('a');
    expect(pipe.transform('   foo bar   ')).toEqual('foo bar');
    expect(pipe.transform('   ')).toEqual('');
  });

  it('should strip specific chars from the beginning of a string', () => {
    expect(pipe.transform('__a__', '__')).toEqual('a');
    expect(pipe.transform('//foo bar//', '//')).toEqual('foo bar');
    expect(pipe.transform('barfoobar', 'bar')).toEqual('foo');
    expect(pipe.transform('barfoobar', 'foo')).toEqual('barfoobar');
  });

});
