import {LastPipe} from '../../src/collection/last.pipe';

describe('LastPipe', () => {
  let pipe: LastPipe;

  beforeEach(() => {
    pipe = new LastPipe();
  });

  it('should return the last member in a collection', () => {
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(5);
    expect(pipe.transform(['a', 'b', 'c', 'd'])).toEqual('d');
    expect(pipe.transform([undefined, null, null])).toBeNull();
    expect(pipe.transform({0: 'foo', 1: 'bar'})).toEqual('bar');
  });

  it('should return last n elements of a collection', () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    expect(pipe.transform([undefined, null, null], 2)).toEqual([null, null]);
    expect(pipe.transform({0: 'foo', 1: 'bar'}, 2)).toEqual(['foo', 'bar']);
  });

  it('should return the last element that match the expression', () => {
    const users: Array<any> = [
      {id: 1, name: {first: 'foo', last: 'bar'}, active: false},
      {id: 2, name: {first: 'baz', last: 'bar'}, active: true},
      {id: 3, name: {first: 'bar', last: 'bar'}, active: false},
      {id: 4, name: {first: 'lol', last: 'bar'}, active: true}
    ];

    expect(pipe.transform(users, 'active')).toEqual([users[3]]);
    expect(pipe.transform(users, 2, 'active')).toEqual([users[1], users[3]]);
  });

  it('should return the last n element that match the expression', () => {
    const mod2 = (elm: number) => {
      return !(elm % 2);
    };

    expect(pipe.transform([1, 2, 3, 4, 5, 6], 2, mod2)).toEqual([4, 6]);
    expect(pipe.transform([1, 2, 3, 4, 6, 11], 2, mod2)).toEqual([4, 6]);
    expect(pipe.transform([2, 1], 2, mod2)).toEqual([2]);
  });

});
