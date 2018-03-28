import {FirstPipe} from '../../src/collection/first.pipe';

describe('FirstPipe', () => {
  let pipe: FirstPipe;

  beforeEach(() => {
    pipe = new FirstPipe();
  });

  it('should return the first member in a collection', () => {
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(1);
    expect(pipe.transform(['a', 'b', 'c', 'd'])).toEqual('a');
    expect(pipe.transform([undefined, null, null])).toBeUndefined();
    expect(pipe.transform({0: 'foo', 1: 'bar'})).toEqual('foo');
  });

  it('should return first n elements of a collection', () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    expect(pipe.transform([undefined, null, null], 1)).toEqual([undefined]);
    expect(pipe.transform({0: 'foo', 1: 'bar'}, 2)).toEqual(['foo', 'bar']);
  });

  it('should return the first element that match the expression', () => {
    const users: Array<any> = [
      {id: 1, name: {first: 'foo', last: 'bar'}, active: false},
      {id: 2, name: {first: 'baz', last: 'bar'}, active: true},
      {id: 3, name: {first: 'bar', last: 'bar'}, active: false},
      {id: 4, name: {first: 'lol', last: 'bar'}, active: true}
    ];

    expect(pipe.transform(users, 'active')).toEqual([users[1]]);
    expect(pipe.transform(users, 2, 'active')).toEqual([users[1], users[3]]);
  });

});
