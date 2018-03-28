import {PickPipe} from '../../src/collection/pick.pipe';

describe('PickPipe', () => {
  let pipe: PickPipe;

  beforeEach(() => {
    pipe = new PickPipe();
  });

  it('should returns a new collection of the results of each expression execution', () => {

    const array: Array<any> = [
      {id: 1, name: 'foo', active: true}, {id: 2, name: 'baz', active: true},
      {id: 1, name: 'ariel', active: true}, {id: 1, name: 'bar', active: false}
    ];
    expect(pipe.transform(array, 'active')).toEqual([array[0], array[1], array[2]]);
  });

  it('should omit elements that match the expression', () => {
    expect(pipe.transform([1, 2, 3, 4, 5, 6], (e: number) => e <= 2)).toEqual([1, 2]);
  });

});
