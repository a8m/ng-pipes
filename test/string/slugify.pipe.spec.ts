import {SlugifyPipe} from '../../src/string/slugify.pipe';

describe('SlugifyPipe', () => {
  let pipe: SlugifyPipe;

  beforeEach(() => {
    pipe = new SlugifyPipe();
  });

  it('should get a string with no replacer and replace spaces with dash(-)', () => {
    expect(pipe.transform('a a')).toEqual('a-a');
    expect(pipe.transform('foo bar baz')).toEqual('foo-bar-baz');
    expect(pipe.transform('Lorem ipsum dolor sit amet')).toEqual('lorem-ipsum-dolor-sit-amet');
  });

  it('should get a string with replacer and replace spaces with it', () => {
    expect(pipe.transform('a a', 1)).toEqual('a1a');
    expect(pipe.transform('foo bar baz', '!')).toEqual('foo!bar!baz');
    expect(pipe.transform('lorem ipsum dolor sit amet', ' ')).toEqual('lorem ipsum dolor sit amet');
    expect(pipe.transform('Lorem ipsum dolor sit amet', '-')).toEqual('lorem-ipsum-dolor-sit-amet');
    expect(pipe.transform('Lorem ipsum dolor sit amet', '')).toEqual('loremipsumdolorsitamet');
  });

});
