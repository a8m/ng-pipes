import {LatinizePipe} from '../../src/string/latinize.pipe';

describe('LatinizePipe', () => {
  let pipe: LatinizePipe;

  beforeEach(() => {
    pipe = new LatinizePipe();
  });

  it('should get a string and replace accents/diacritics with the ASCII equivalent', () => {
    expect(pipe.transform('a ç')).toEqual('a c');
    expect(pipe.transform('föo bàr baz')).toEqual('foo bar baz');
    expect(pipe.transform('Lòrém Ìpsûm dölôr sít Àmet')).toEqual('Lorem Ipsum dolor sit Amet');
  });

});
