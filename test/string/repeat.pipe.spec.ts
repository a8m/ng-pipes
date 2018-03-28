import {RepeatPipe} from '../../src/string/repeat.pipe';

describe('RepeatPipe', () => {
  let pipe: RepeatPipe;

  beforeEach(() => {
    pipe = new RepeatPipe();
  });

  it('should repeat a string `n` times', () => {
    expect(pipe.transform('a')).toEqual('a');
    expect(pipe.transform('a', 3)).toEqual('aaa');
    expect(pipe.transform('a ', 3)).toEqual('a a a ');
    expect(pipe.transform('foo', 3)).toEqual('foofoofoo');
  });

  it('should add a separator if given', () => {
    expect(pipe.transform('foo', undefined, 'bar')).toEqual('foo');
    expect(pipe.transform('a', 3, '^')).toEqual('a^a^a');
    expect(pipe.transform('^', 2, '_')).toEqual('^_^');
    expect(pipe.transform('foo', 2, 'bar')).toEqual('foobarfoo');
  });

});
