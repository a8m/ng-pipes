import {RemoveWithPipe} from '../../src/collection/remove-with.pipe';

describe('RemoveWithPipe', () => {
  let pipe: RemoveWithPipe;

  beforeEach(() => {
    pipe = new RemoveWithPipe();
  });

  it('should get array and properties object and return' +
         'array pipe.transformed by equivalent property values.',
     () => {

       const array: Array<any> = [
         {id: 1, name: 'ariel'}, {id: 2, name: 'baz'}, {id: 1, name: 'ariel'},
         {id: 1, name: 'bar'}
       ];

       expect(pipe.transform(array, {id: 1})).toEqual([{id: 2, name: 'baz'}]);
       expect(pipe.transform(array, {id: 1, name: 'ariel'})).toEqual([
         {id: 2, name: 'baz'}, {id: 1, name: 'bar'}
       ]);

       expect(pipe.transform(array, {})).toEqual([]);

     });

  it('should get object and properties object and return' +
         'array of all elements that have equivalent property values.',
     () => {

       const object: any = {
         0: {id: 1, name: 'ariel'},
         1: {id: 2, name: 'baz'},
         2: {id: 1, name: 'ariel'},
         3: {id: 1, name: 'bar'}
       };

       expect(pipe.transform(object, {id: 1})).toEqual([object[1]]);
       expect(pipe.transform(object, {id: 1, name: 'ariel'})).not.toContain(object[0]);

       expect(pipe.transform(object, {}).length).toEqual(0);

     });

  it('should not get properties object and return the collection as is', () => {

    expect(pipe.transform([{a: 1}])).toEqual([{a: 1}]);
    expect(pipe.transform([{a: 1}, {b: 2}])).toEqual([{a: 1}, {b: 2}]);

  });

});
