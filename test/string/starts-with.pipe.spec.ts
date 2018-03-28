import {StartsWithPipe} from '../../src/string/starts-with.pipe';

describe('StartsWithPipe', () => {
  let pipe: StartsWithPipe;

  beforeEach(() => {
    pipe = new StartsWithPipe();
  });

  it('should returns whether string starts with the ends parameter', () => {
    expect(pipe.transform('string', 's')).toBeTruthy();
    expect(pipe.transform('string', 'str')).toBeTruthy();
    expect(pipe.transform('foo bar', 'FOO')).toBeTruthy();

    expect(pipe.transform('.JPG', '.jpg')).toBeTruthy();
    expect(pipe.transform('string', 'strip')).toBeFalsy();
    expect(pipe.transform('string', 'fing')).toBeFalsy();
    expect(pipe.transform('foo bar', 'foo z')).toBeFalsy();
  });

  it('should be case sensitive', () => {
    expect(pipe.transform('.JPG', '.jpg', true)).toBeFalsy();
    expect(pipe.transform('string', 'STR', true)).toBeFalsy();
    expect(pipe.transform('string', 'STR', false)).toBeTruthy();
    expect(pipe.transform('foo bar', 'Foo B', true)).toBeFalsy();
  });

});
