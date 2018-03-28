import {ShortFmtPipe} from '../../src/math/short-fmt.pipe';

describe('ShortFmtPipe', () => {
  let pipe: ShortFmtPipe;

  beforeEach(() => {
    pipe = new ShortFmtPipe();
  });

  it('should return the correct display from the number', () => {
    expect(pipe.transform(0, 2)).toEqual('0');
    expect(pipe.transform(5, 2)).toEqual('5');
    expect(pipe.transform(1024, 0)).toEqual('1 K');
    expect(pipe.transform(1993, 2)).toEqual('1.99 K');
    expect(pipe.transform(1049901, 5)).toEqual('1.0499 M');
    expect(pipe.transform(1909234901, 2)).toEqual('1.91 B');

  });

});
