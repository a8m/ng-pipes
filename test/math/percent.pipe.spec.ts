import {PercentPipe} from '../../src/math/percent.pipe';

describe('PercentPipe', () => {
  let pipe: PercentPipe;

  beforeEach(() => {
    pipe = new PercentPipe();
  });

  it('should return percentage between two numbers', () => {
    expect(pipe.transform(10, 100)).toEqual(10);
    expect(pipe.transform(1, 100)).toEqual(1);
    expect(pipe.transform(23, 500)).toEqual(4.6);
  });

  it('should get string as a number', () => {
    expect(pipe.transform('20', 400)).toEqual(5);
    expect(pipe.transform('100', 100)).toEqual(100);
  });

  it('should return a round number if set to true', () => {
    expect(pipe.transform('20.2', 400, true)).toEqual(5);
    expect(pipe.transform('100.3', 100, true)).toEqual(100);
    expect(pipe.transform(23.4, 100, true)).toEqual(23);
  });

  it('should set divided to 100, if not defined', () => {
    expect(pipe.transform(32)).toEqual(32);
    expect(pipe.transform(200)).toEqual(200);
  });

});
