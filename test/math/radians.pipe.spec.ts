import {RadiansPipe} from '../../src/math/radians.pipe';

describe('RadiansPipe', () => {
  let pipe: RadiansPipe;

  beforeEach(() => {
    pipe = new RadiansPipe();
  });

  it('should return the correct radians from degrees', () => {
    expect(pipe.transform(180, 2)).toEqual(3.14);
    expect(pipe.transform(180, 0)).toEqual(3);
    expect(pipe.transform(50, 2)).toEqual(0.87);
    expect(pipe.transform(130, 2)).toEqual(2.27);
    expect(pipe.transform(-30, 4)).toEqual(-0.5236);
    expect(pipe.transform(1030, 5)).toEqual(17.97689);
  });

});
