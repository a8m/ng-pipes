import {LeftTrimPipe} from '../../src/string/ltrim.pipe';

describe('LeftTrimPipe', () => {
  let pipe: LeftTrimPipe;

  beforeEach(() => {
    pipe = new LeftTrimPipe();
  });

  it('should strip whitespace from the beginning of a string', () => {
    expect(pipe.transform('   a')).toEqual('a');
    expect(pipe.transform('   foo bar   ')).toEqual('foo bar   ');
    expect(pipe.transform('   ')).toEqual('');
  });

  it('should strip specific chars from the beginning of a string', () => {
    expect(pipe.transform('__a__', '__')).toEqual('a__');
    expect(pipe.transform('//foo bar//', '//')).toEqual('foo bar//');
    expect(pipe.transform('barfoobar', 'bar')).toEqual('foobar');
    expect(pipe.transform('barfoobar', 'foo')).toEqual('barfoobar');
  });

});
