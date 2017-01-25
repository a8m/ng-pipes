import {BeforePipe} from '../../src/index';

describe('BeforePipe', () => {
  let pipe: BeforePipe;
  beforeEach(() => {
    pipe = new BeforePipe();
  });

  it('should get array as a collection and specified count, and returns all of the items' +
         'in the collection before the specified count.',
     () => {
       var array = [{a: 1}, {a: 2}];
       expect(pipe.transform(array, 2)).toEqual([{a: 1}]);
       expect(pipe.transform([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
       expect(pipe.transform([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
     });

  it('should get object as a collection and specified count, and returns all of the items' +
         'in the collection before the specified count.',
     () => {
       var object = {0: {a: 1}, 1: {a: 2}, 2: {a: 3}, 3: {a: 4}};
       expect(pipe.transform(object, 3)).toEqual([{a: 1}, {a: 2}]);
       expect(pipe.transform(object, 1)).toEqual([]);
       expect(pipe.transform(object, 10)).toEqual([{a: 1}, {a: 2}, {a: 3}, {a: 4}]);
     });
});
