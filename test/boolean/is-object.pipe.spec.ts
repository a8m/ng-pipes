import {IsObjectPipe} from '../../src/index';

describe('IsObjectPipe', () => {
  let pipe: IsObjectPipe;

  beforeEach(() => {
    pipe = new IsObjectPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform({})).toEqual(true);
    expect(pipe.transform({'key': 1})).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toEqual(false);
    expect(pipe.transform(1)).toEqual(false);
  });

});
