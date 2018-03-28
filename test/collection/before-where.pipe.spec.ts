import {BeforeWherePipe} from '../../src/collection/before-where.pipe';

describe('BeforeWherePipe', () => {
  let pipe: BeforeWherePipe;

  beforeEach(() => {
    pipe = new BeforeWherePipe();
  });

  it('should get array and properties object, and returns all the items,' +
         'in the collection before the first that found with the given properties including it.',
     () => {

       let array = [{a: 1}, {a: 2}, {a: 3}], orders = [
         {id: 1, customer: {name: 'foo'}, date: 'Tue Jul 15 2014'},
         {id: 2, customer: {name: 'foo'}, date: 'Tue Jul 16 2014'},
         {id: 3, customer: {name: 'foo'}, date: 'Tue Jul 17 2014'},
         {id: 4, customer: {name: 'foo'}, date: 'Tue Jul 18 2014'},
         {id: 5, customer: {name: 'foo'}, date: 'Tue Jul 19 2014'}
       ];
       expect(pipe.transform(array, {a: 2})).toEqual([{a: 1}, {a: 2}]);
       expect(pipe.transform(orders, {date: 'Tue Jul 17 2014'})).toEqual([
         orders[0], orders[1], orders[2]
       ]);
       expect(pipe.transform(orders, {date: 'Tue Jul 10 2014'})).toEqual(orders);
     });

  it('should get object and properties object, and returns all the items,' +
         'in the collection before the first that found with the given properties including it.',
     () => {

       let object = {0: {a: 1}, 1: {a: 2}, 2: {a: 3}, 3: {a: 4}}, orders = {
         0: {id: 1, customer: {name: 'foo'}, date: 'Tue Jul 15 2014'},
         1: {id: 2, customer: {name: 'foo'}, date: 'Tue Jul 16 2014'},
         2: {id: 3, customer: {name: 'foo'}, date: 'Tue Jul 17 2014'},
         3: {id: 4, customer: {name: 'foo'}, date: 'Tue Jul 18 2014'},
         4: {id: 5, customer: {name: 'foo'}, date: 'Tue Jul 19 2014'}
       };
       expect(pipe.transform(object, {a: 3})).toEqual([{a: 1}, {a: 2}, {a: 3}]);
       expect(pipe.transform(orders, {date: 'Tue Jul 15 2014'})).toEqual([orders[0]]);
     });

});
