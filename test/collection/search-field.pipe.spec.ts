import {SearchFieldPipe} from '../../src/collection/search-field.pipe';

describe('SearchFieldPipe', () => {
  let pipe: SearchFieldPipe;

  beforeEach(() => {
    pipe = new SearchFieldPipe();
  });

  it('should get array as a collection, and several keys for searchFiled and' +
         'return new array with the new "searchField" property',
     () => {

       const input: Array<any> = [
         {first_name: 'Sharon', last_name: 'Melendez'},
         {first_name: 'Edmundo', last_name: 'Hepler'},
         {first_name: 'Marsha', last_name: 'Letourneau'}
       ];

       const output = [
         {first_name: 'Sharon', last_name: 'Melendez', searchField: 'Sharon Melendez'},
         {first_name: 'Edmundo', last_name: 'Hepler', searchField: 'Edmundo Hepler'},
         {first_name: 'Marsha', last_name: 'Letourneau', searchField: 'Marsha Letourneau'}
       ];

       expect(pipe.transform(input, 'first_name', 'last_name')).toEqual(output);

       expect(pipe.transform([{a: 'a', b: 'b'}], 'a', 'b')).toEqual([
         {a: 'a', b: 'b', searchField: 'a b'}
       ]);

     });

  it('should support nested properties to', () => {

    const input: Array<any> = [
      {user: {first_name: 'Sharon', last_name: 'Melendez'}},
      {user: {first_name: 'Edmundo', last_name: 'Hepler'}},
      {user: {first_name: 'Marsha', last_name: 'Letourneau'}}
    ];

    const output: Array<any> = [
      {user: {first_name: 'Sharon', last_name: 'Melendez'}, searchField: 'Sharon Melendez'},
      {user: {first_name: 'Edmundo', last_name: 'Hepler'}, searchField: 'Edmundo Hepler'},
      {user: {first_name: 'Marsha', last_name: 'Letourneau'}, searchField: 'Marsha Letourneau'}
    ];

    const inputObject = {user: {details: {name: {first: 'Ariel', last: 'Mashraki'}}}},
          outputObject = {
            user: {details: {name: {first: 'Ariel', last: 'Mashraki'}}},
            searchField: 'Ariel Mashraki'
          };

    expect(pipe.transform(input, 'user.first_name', 'user.last_name')).toEqual(output);

    expect(pipe.transform([inputObject], 'user.details.name.first', 'user.details.name.last'))
        .toEqual([outputObject]);

  });

  it('should change the original/source collection', () => {

    const mutable: Array<any> = [{a: 'a', b: 'b'}];
    pipe.transform(mutable, 'a', 'b');

    expect(mutable).toEqual([{a: 'a', b: 'b', searchField: 'a b'}]);

  });

});
