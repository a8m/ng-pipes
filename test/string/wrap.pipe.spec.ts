import {WrapPipe} from '../../src/string/wrap.pipe';

describe('WrapPipe', () => {
  let pipe: WrapPipe;

  beforeEach(() => {
    pipe = new WrapPipe();
  });

  it('should wrap a string with given wrapper', () => {
    expect(pipe.transform('a', 'b')).toEqual('bab');
    expect(pipe.transform('a', 1)).toEqual('1a1');
    expect(pipe.transform('a', '.')).toEqual('.a.');
  });

  it('should wrap a string with starts and ends wrapper', () => {
    expect(pipe.transform('b', 'a', 'c')).toEqual('abc');
    expect(pipe.transform('a', 1, 2)).toEqual('1a2');
    expect(pipe.transform('a', '/', '.')).toEqual('/a.');
  });

});
