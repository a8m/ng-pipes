import {IsFunctionPipe} from '../../src/index';

describe('IsFunctionPipe', () => {
  let pipe: IsFunctionPipe;

  beforeEach(() => {
    pipe = new IsFunctionPipe();
  });

  it('should return true for all inputs', () => {
    const func: Function = () => {};
    expect(pipe.transform(func)).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(null)).toEqual(false);
    expect(pipe.transform(undefined)).toEqual(false);
    expect(pipe.transform(1)).toEqual(false);
    expect(pipe.transform('')).toEqual(false);
    expect(pipe.transform({})).toEqual(false);
  });

});
