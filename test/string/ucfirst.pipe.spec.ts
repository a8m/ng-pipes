import {UcfirstPipe} from '../../src/string/ucfirst.pipe';

describe('UcfirstPipe', () => {
  let pipe: UcfirstPipe;

  beforeEach(() => {
    pipe = new UcfirstPipe();
  });

  it('should get a string and do upppercase to first letter in the first word', () => {
    expect(pipe.transform('a')).toEqual('A');
    expect(pipe.transform('foo bar baz')).toEqual('Foo bar baz');
    expect(pipe.transform('lorem ipsum is simply dummy.... industry.'))
        .toEqual('Lorem ipsum is simply dummy.... industry.');
  });

});
