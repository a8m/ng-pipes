import {CountByPipe} from '../../src/collection/count-by.pipe';

describe('CountByPipe', () => {
  let pipe: CountByPipe;

  beforeEach(() => {
    pipe = new CountByPipe();
  });

  it('should returns a count for the number of objects in each group.', () => {
    let players = [
      {name: 'Gene', team: 'alpha'}, {name: 'George', team: 'beta'}, {name: 'Steve', team: 'gamma'},
      {name: 'Paula', team: 'beta'}, {name: 'Scruath', team: 'gamma'}
    ];
    expect(pipe.transform(players, 'team')).toEqual({alpha: 1, beta: 2, gamma: 2});
  });

  it('should support nested properties to', () => {
    let orders = [
      {id: 10, customer: {name: 'foo', id: 1}}, {id: 11, customer: {name: 'bar', id: 2}},
      {id: 12, customer: {name: 'foo', id: 1}}, {id: 13, customer: {name: 'bar', id: 2}},
      {id: 14, customer: {name: 'bar', id: 3}}, 2, null, true
    ];

    expect(pipe.transform(orders, 'customer.name')).toEqual({foo: 2, bar: 3, undefined: 3});
  });

  it('should get object as collection, property(nested to) as identifier and ' +
         'returns the composed aggregate object.',
     () => {
       let dataObject =
           {0: {id: 1, data: {}}, 1: {id: 1, data: {}}, 2: {id: 2, data: {}}, 3: {id: 2, data: {}}};

       expect(pipe.transform(dataObject, 'id')).toEqual({1: 2, 2: 2});
     });

});
