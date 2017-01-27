import {IsIdenticalToPipe} from '../../src/index';

describe('IsIdenticalToPipe', () => {
  let pipe: IsIdenticalToPipe;

  beforeEach(() => {
    pipe = new IsIdenticalToPipe();
  });

  it('should return true for all inputs', () => {
    expect(pipe.transform(1, 1)).toEqual(true);
    expect(pipe.transform('1', '1')).toEqual(true);
    expect(pipe.transform([1, 2, 3], [1, 2, 3])).toEqual(true);
    expect(pipe.transform({ 'key': 2 }, { 'key': 2 })).toEqual(true);
    expect(pipe.transform([{ 'key': 2 }, { 'key': 4 }], [{ 'key': 2 }, { 'key': 4 }])).toEqual(true);
  });

  it('should return false for all inputs', () => {
    expect(pipe.transform(1, 2)).toEqual(false);
    expect(pipe.transform('1', '2')).toEqual(false);
    expect(pipe.transform([1, 2, 3], [4, 2, 3])).toEqual(false);
    expect(pipe.transform({ 'key': 2 }, { 'key': 4 })).toEqual(false);
    expect(pipe.transform([{ 'key': 4 }, { 'key': 2 }], [{ 'key': 2 }, { 'key': 4 }])).toEqual(false);
  });

});
