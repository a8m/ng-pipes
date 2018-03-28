import {WherePipe} from '../../src/collection/where.pipe';

describe('WherePipe', () => {
  let pipe: WherePipe;

  beforeEach(() => {
    pipe = new WherePipe();
  });

  it('should get array and properties object and return' +
         'array of all elements that have equivalent property values.',
     () => {
       const array: Array<any> = [
         {id: 0, name: 'ariel'}, {id: 1, name: 'baz'}, {id: 0, name: 'ariel'},
         {id: 0, name: 'bar'}
       ];

       expect(pipe.transform(array, {id: 0, name: 'ariel'})).toEqual([array[0], array[2]]);
       expect(pipe.transform(array, {id: 0})).not.toContain(array[1]);
       expect(pipe.transform(array, {})).toEqual(array);
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

       expect(pipe.transform(object, {id: 1, name: 'ariel'})).toEqual([object[0], object[2]]);
       expect(pipe.transform(object, {id: 1})).not.toContain(object[1]);
       expect(pipe.transform(object, {}).length).toEqual(4);
     });

  it('should not get properties object and return the collection as is', () => {
    expect(pipe.transform([{a: 1}])).toEqual([{a: 1}]);
    expect(pipe.transform([{a: 1}, {b: 2}])).toEqual([{a: 1}, {b: 2}]);
  });

});
