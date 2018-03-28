import {UniqPipe} from '../../src/collection/uniq.pipe';

describe('UniqPipe', () => {
  let pipe: UniqPipe;

  beforeEach(() => {
    pipe = new UniqPipe();
  });

  it('should get a collection of primitives and return pipe.transformed collection', () => {
    // Boolean
    expect(pipe.transform([true, true, false, false, true])).toEqual([true, false]);
    // numbers
    expect(pipe.transform([1, 1, 2, 3, 4, 5, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    // strings
    expect(pipe.transform(['Ariel', 'Ariel', 'Ariel'])).toEqual(['Ariel']);
  });

  it('should get array as collection, property(nested to) as identifier and filter', () => {

    const orders: Array<any> = [
      {id: 10, customer: {name: 'foo', id: 1}},
      {id: 11, customer: {name: 'bar', id: 2}},
      {id: 12, customer: {name: 'foo', id: 1}},
      {id: 13, customer: {name: 'bar', id: 2}},
      {id: 14, customer: {name: 'baz', id: 3}},
    ];

    const filteredOrders: Array<any> = [
      {id: 10, customer: {name: 'foo', id: 1}},
      {id: 11, customer: {name: 'bar', id: 2}},
      {id: 14, customer: {name: 'baz', id: 3}},
    ];

    expect(pipe.transform(orders, 'customer.id')).toEqual(filteredOrders);
    expect(pipe.transform(orders, 'customer.id').length).toEqual(filteredOrders.length);

    expect(pipe.transform(orders, 'customer.name')).toEqual(filteredOrders);
    expect(pipe.transform(orders, 'customer.name').length).toEqual(filteredOrders.length);

    expect(pipe.transform(orders, 'id')).toEqual(orders);
    expect(pipe.transform(orders, 'id').length).toEqual(orders.length);

  });

  it('should filtered by property and not touch members without this property', () => {

    const array: Array<any> = [
      {id: 1, person: {name: 'Ariel', age: 25}}, {id: 2, person: {name: 'Joe', age: 25}},
      {id: 3, person: {name: 'Bob', age: 42}}, {id: 4, person: {name: 'Marie', age: 42}}, {}, [], 1,
      2, 'foo', true, null
    ];

    const filteredArray: Array<any> = [
      {id: 1, person: {name: 'Ariel', age: 25}}, {id: 3, person: {name: 'Bob', age: 42}}, {}, [], 1,
      2, 'foo', true, null
    ];

    // filter by person.age
    expect(pipe.transform(array, 'person.age')).toEqual(filteredArray);

    // should not touch members without this property
    expect(pipe.transform(array, 'id')).toEqual(array);
  });

  it('should support advance nested properties', () => {
    const orders: Array<any> = [
      {order: {person: {credit: {information: {num: 99999}}}}},
      {order: {person: {credit: {information: {num: 99999}}}}},
      {order: {person: {credit: {information: {num: 99999}}}}}
    ];
    expect(pipe.transform(orders, 'order.person.credit.information.num')).toEqual([orders[0]]);
  });

});
