import {IsFunctionPipe} from '../../src/index';

describe('IsFunctionPipe', () => {
  let pipe: IsFunctionPipe;

  beforeEach(() => {
    pipe = new IsFunctionPipe();
  });

  it('should return true for all inputs', () => {
    const func: Function = () => {};
    expect(pipe.transform(func)).toBeTruthy();
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform({})).toBeFalsy();
  });

});
