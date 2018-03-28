import {AfterPipe} from '../../src/collection/after.pipe';

describe('AfterPipe', () => {
  let pipe: AfterPipe;

  beforeEach(() => {
    pipe = new AfterPipe();
  });

  it('should get array as a collection and specified count, and return all the items' +
         'in the collection after the specified count.',
     () => {
       let array = [{a: 1}, {a: 2}];
       expect(pipe.transform(array, 1)).toEqual([{a: 2}]);
       expect(pipe.transform([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
       expect(pipe.transform([1, 2, 3, 4], 5)).toEqual([]);
     });

  it('should get object as a collection and specified count, and return all the items' +
         'in the collection after the specified count.',
     () => {
       let object = {0: {a: 1}, 1: {a: 2}, 2: {a: 3}, 3: {a: 4}};
       expect(pipe.transform(object, 3)).toEqual([{a: 4}]);
       expect(pipe.transform(object, 2)).toEqual([{a: 3}, {a: 4}]);
       expect(pipe.transform(object, 10)).toEqual([]);
     });

});
