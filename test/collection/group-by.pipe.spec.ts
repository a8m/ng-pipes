import {GroupByPipe} from '../../src/collection/group-by.pipe';

describe('GroupByPipe', () => {
  let pipe: GroupByPipe;
  ;

  beforeEach(() => {
    pipe = new GroupByPipe();
  });

  it('should get array as collection, property(nested to) as identifier and ' +
         'returns the composed aggregate object.',
     () => {
       const players: Array<any> = [
         {name: 'Gene', team: 'alpha'}, {name: 'George', team: 'beta'},
         {name: 'Steve', team: 'gamma'}, {name: 'Paula', team: 'beta'},
         {name: 'Scruath', team: 'gamma'}
       ];

       expect(pipe.transform(players, 'team')).toEqual({
         alpha: [players[0]],
         beta: [players[1], players[3]],
         gamma: [players[2], players[4]]
       });
     });

  it('should support nested properties to', () => {
    const orders: Array<any> = [
      {id: 10, customer: {name: 'foo', id: 1}}, {id: 11, customer: {name: 'bar', id: 2}},
      {id: 12, customer: {name: 'foo', id: 1}}, {id: 13, customer: {name: 'bar', id: 2}},
      {id: 14, customer: {name: 'bar', id: 3}}, 2, null, true
    ];

    expect(pipe.transform(orders, 'customer.name')).toEqual({
      foo: [orders[0], orders[2]],
      bar: [orders[1], orders[3], orders[4]],
      undefined: [2, null, true]
    });
  });

  it('should get object as collection, property(nested to) as identifier and ' +
         'returns the composed aggregate object.',
     () => {
       const dataObject: any =
           {0: {id: 1, data: {}}, 1: {id: 1, data: {}}, 2: {id: 2, data: {}}, 3: {id: 2, data: {}}};

       expect(pipe.transform(dataObject, 'id'))
           .toEqual({1: [dataObject[0], dataObject[1]], 2: [dataObject[2], dataObject[3]]});
     });

});
