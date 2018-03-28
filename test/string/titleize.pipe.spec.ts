import {TitleizePipe} from '../../src/string/titleize.pipe';

describe('TitleizePipe', () => {
  let pipe: TitleizePipe;

  beforeEach(() => {
    pipe = new TitleizePipe();
  });

  it('should get a string and do upppercase to first letter in the each word', () => {
    expect(pipe.transform('a')).toEqual('A');
    expect(pipe.transform('foo bar baz')).toEqual('Foo Bar Baz');
    expect(pipe.transform('lorem ipsum is simply dummy.... industry.'))
        .toEqual('Lorem Ipsum Is Simply Dummy.... Industry.');
  });

});
