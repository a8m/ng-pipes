import {MapPipe} from '../../src/collection/map.pipe';

describe('MapPipe', () => {
  let pipe: MapPipe;

  beforeEach(() => {
    pipe = new MapPipe();
  });

  it('should returns a new collection of the results of each expression execution', () => {

    const array: Array<any> =
        [{id: 1, name: 'foo'}, {id: 2, name: 'baz'}, {id: 1, name: 'ariel'}, {id: 1, name: 'bar'}];
    expect(pipe.transform(array, 'name')).toEqual(['foo', 'baz', 'ariel', 'bar']);
  });

  it('should return the last n element that match the expression', () => {
    expect(pipe.transform([1, 2, 3, 4, 5, 6], (e: number) => e * 2)).toEqual([2, 4, 6, 8, 10, 12]);
  });

});
