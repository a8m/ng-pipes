import {StripTagsPipe} from '../../src/string/strip-tags.pipe';

describe('EndsWithPipe', () => {
  let pipe: StripTagsPipe;

  beforeEach(() => {
    pipe = new StripTagsPipe();
  });

  it('should get a string with tags and splash it', () => {
    expect(pipe.transform('<p>lorem ipsum</p>')).toEqual('lorem ipsum');
    expect(pipe.transform('<div class="block">foo bar</div>')).toEqual('foo bar');
    expect(pipe.transform('<title>awesome title</title>')).toEqual('awesome title');
  });

});
