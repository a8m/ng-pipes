import {RadixPipe} from '../../src/math/radix.pipe';

describe('RadixPipe', () => {
  let pipe: RadixPipe;

  beforeEach(() => {
    pipe = new RadixPipe();
  });

  it('should converting decimal numbers to different bases(radix)', () => {
    expect(pipe.transform(8, 2)).toEqual('1000');
    expect(pipe.transform(15, 16)).toEqual('F');
    expect(pipe.transform(32586, 16)).toEqual('7F4A');
    expect(pipe.transform(32, 8)).toEqual('40');
  });

  it('should not be able to convert base less than 2, and bigger than 36', () => {
    expect(pipe.transform(998, 37)).toEqual('998');
    expect(pipe.transform(15, 1)).toEqual('15');
  });

});
