import {DegreesPipe} from '../../src/math/degrees.pipe';

describe('DegreesPipe', () => {
  let pipe: DegreesPipe;

  beforeEach(() => {
    pipe = new DegreesPipe();
  });

  it('should return the correct degrees from radians', () => {
    expect(pipe.transform(1.5, 2)).toEqual(85.94);
    expect(pipe.transform(0, 0)).toEqual(0);
    expect(pipe.transform(0.3235, 0)).toEqual(19);
    expect(pipe.transform(0.8222235, 5)).toEqual(47.10994);
    expect(pipe.transform(-0.8222235, 5)).toEqual(-47.10994);
    expect(pipe.transform(45, 2)).toEqual(2578.31);
  });

});
