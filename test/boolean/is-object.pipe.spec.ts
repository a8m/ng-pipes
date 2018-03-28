import {IsObjectPipe} from '../../src/boolean/is-object.pipe';

describe('IsObjectPipe', () => {
  let pipe: IsObjectPipe;

  beforeEach(() => {
    pipe = new IsObjectPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform({})).toBeTruthy();
    expect(pipe.transform({'key': 1})).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
  });

});
