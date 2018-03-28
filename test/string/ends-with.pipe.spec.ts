import {EndsWithPipe} from '../../src/string/ends-with.pipe';

describe('EndsWithPipe', () => {
  let pipe: EndsWithPipe;

  beforeEach(() => {
    pipe = new EndsWithPipe();
  });

  it('should returns whether string ends with the ends parameter', () => {
    expect(pipe.transform('string', 'g')).toBeTruthy();
    expect(pipe.transform('string', 'ing')).toBeTruthy();
    expect(pipe.transform('foo bar', 'BAR')).toBeTruthy();

    expect(pipe.transform('.JPG', '.jpg')).toBeTruthy();
    expect(pipe.transform('string', 'str')).toBeFalsy();
    expect(pipe.transform('string', 'fing')).toBeFalsy();
    expect(pipe.transform('foo bar', 'baz')).toBeFalsy();
  });

  it('should be case sensitive', () => {
    expect(pipe.transform('.JPG', '.jpg', true)).toBeFalsy();
    expect(pipe.transform('string', 'ING', true)).toBeFalsy();
    expect(pipe.transform('string', 'ING', false)).toBeTruthy();
    expect(pipe.transform('foo bar', 'Foo B', true)).toBeFalsy();
  });

});
