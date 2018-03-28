import {ContainsPipe} from '../../src/collection/contains.pipe';

describe('ContainsPipe', () => {
  let pipe: ContainsPipe;

  beforeEach(() => {
    pipe = new ContainsPipe();
  });

  it('should find elements which are objects', () => {
    const needle: any = {};
    const haystack: Array<any> = [needle];

    expect(pipe.transform(haystack, needle)).toBeTruthy();
  });

  it('should get collection of primitives and use strict comparison(===)', () => {
    expect(pipe.transform(['foo', 'bar'], 'bar')).toBeTruthy();
    expect(pipe.transform([1, 2, 3, 4], 4)).toBeTruthy();

    expect(pipe.transform(['foo', 'bar'], 'baz')).toBeFalsy();
    expect(pipe.transform([1, 2, 3, 4], -1)).toBeFalsy();
  });

  it('should get function as expression', () => {
    const array: Array<number> = [1, 2, 3, 4, 5];

    expect(pipe.transform(array, (elm: number) => !(elm % 2))).toBeTruthy();
  });

  it('should get object as collection and return if given expression is ' +
         'present in one or more object in the collection',
     () => {
       const object: any = {
         0: {id: 1, active: true},
         1: {id: 2, active: false},
         2: {id: 3, active: false},
         3: {id: 4, active: false},
       };

       expect(pipe.transform(object, 'active')).toBeTruthy();
       expect(pipe.transform(object, 'hello.world')).toBeFalsy();
     });

});
