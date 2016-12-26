import { XORPipe } from '../../src/index';

describe('XORPipe', () => {
  let pipe: XORPipe;
  beforeEach(() => {
    pipe = new XORPipe();
  });


  it('should get 2 array collection and return exclusive or between them', function() {
    expect(pipe.transform([1, 2], [1])).toEqual([2]);
    expect(pipe.transform([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 5, 4]);

    expect(pipe.transform([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(pipe.transform([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  });

  it('should get objects as collection', function() {
    expect(pipe.transform({ 0: 1, 1: 2 }, { 0: 3 })).toEqual([1, 2, 3]);
    expect(pipe.transform({ 0: 1, 1: 2 }, { 0: 1 })).toEqual([2]);
  });

  it('should get an objects collection and filters by value', function() {
    var array = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'baz' }
    ];

    expect(pipe.transform(array, array)).toEqual([]); // A (xor) A
  });


  it('should filter by specific property', function() {
    var users = [
      { id: 0, details: { first_name: 'foo', last_name: 'bar' } },
      { id: 1, details: { first_name: 'foo', last_name: 'baz' } },
      { id: 2, details: { first_name: 'foo', last_name: 'bag' } }
    ];

    expect(pipe.transform(users, [{ details: { first_name: 'foo' } }], 'details.first_name'))
      .toEqual([]);
    expect(pipe.transform(users, [{ id: 0 }, { id: 1 }], 'id')).toEqual([users[2]]);

    expect(pipe.transform(users, [{ id: 3, details: { first_name: 'foo', last_name: 'bag' } }], 'id'))
      .toEqual(
      users.concat([{ id: 3, details: { first_name: 'foo', last_name: 'bag' } }]
      ));
  });
});
