import {FilterByPipe} from '../../src/collection/filter-by.pipe';

describe('FilterByPipe', () => {
  let pipe: FilterByPipe;

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it('should pipe.transform by specific properties and avoid the rest', () => {
    const users: Array<any> = [
      {id: 1, user: {first_name: 'foo', last_name: 'bar', mobile: 4444}},
      {id: 2, user: {first_name: 'bar', last_name: 'foo', mobile: 3333}},
      {id: 3, user: {first_name: 'foo', last_name: 'baz', mobile: 2222}},
      {id: 4, user: {first_name: 'baz', last_name: 'foo', mobile: 1111}}
    ];

    expect(pipe.transform(users, ['user.first_name', 'user.last_name'], 'foo')).toEqual(users);
    expect(pipe.transform(users, ['user.first_name'], 'foo')).toEqual([users[0], users[2]]);
    expect(pipe.transform(users, ['user.last_name'], 'bar')).toEqual([users[0]]);

    expect(pipe.transform(users, ['id', 'user.mobile'], '1')).toEqual([users[0], users[3]]);
    expect(pipe.transform(users, ['id'], '1')).toEqual([users[0]]);
    expect(pipe.transform(users, ['id', 'user.mobile'], '11')).toEqual([users[3]]);
  });

  it('should support to get object as collection', () => {
    const users: any = {
      0: {id: 1, user: {first_name: 'foo', last_name: 'bar', mobile: 4444}},
      1: {id: 2, user: {first_name: 'bar', last_name: 'foo', mobile: 3333}},
      2: {id: 3, user: {first_name: 'foo', last_name: 'baz', mobile: 2222}},
      3: {id: 4, user: {first_name: 'baz', last_name: 'foo', mobile: 1111}}
    };

    expect(pipe.transform(users, ['user.first_name', 'user.last_name'], 'foo')).toEqual([
      users[0], users[1], users[2], users[3]
    ]);
    expect(pipe.transform(users, ['user.first_name'], 'oo')).toEqual([users[0], users[2]]);
    expect(pipe.transform(users, ['user.last_name'], 'bar')).toEqual([users[0]]);
  });

  it('should parse concatenate properties, and search them by one field', () => {
    const users: Array<any> = [
      {id: 1, user: {first_name: 'foo', last_name: 'bar', mobile: 4444}},
      {id: 2, user: {first_name: 'bar', last_name: 'foo', mobile: 3333}},
      {id: 3, user: {first_name: 'foo', last_name: 'baz', mobile: 2222}},
      {id: 4, user: {first_name: 'baz', last_name: 'foo', mobile: 1111}}
    ];

    expect(pipe.transform(users, ['user.first_name + user.last_name'], 'foo bar')).toEqual([
      users[0]
    ]);
    expect(pipe.transform(users, ['user.first_name+user.last_name'], 'foo bar')).toEqual([
      users[0]
    ]);
    expect(pipe.transform(users, ['user.first_name + user.mobile'], 'foo 4444')).toEqual([
      users[0]
    ]);

    expect(pipe.transform(users, ['user.first_name + user.undefined'], 'foo')).toEqual([
      users[0], users[2]
    ]);

    expect(pipe.transform(users, ['user.first_name + user.last_name'], 'a')).toEqual(users);
    expect(pipe.transform(users, ['user.first_name + user.last_name'], 'ba')).toEqual(users);
    expect(pipe.transform(users, ['user.first_name + user.last_name'], 'foo')).toEqual(users);
  });

  it('should take care on extreme conditions', () => {
    const users: Array<any> = [
      {id: 1, user: {first_name: 'foo', last_name: 'bar', mobile: 4444}},
      {id: 2, user: {first_name: 'bar', last_name: 'foo', mobile: 3333}},
      {id: 3, user: {first_name: 'foo', last_name: 'baz', mobile: 2222}},
      {id: 4, user: {first_name: 'baz', last_name: 'foo', mobile: 1111}}
    ];

    expect(pipe.transform(users, ['id'], 1)).toEqual([users[0]]);
    expect(pipe.transform(users, ['id'])).toEqual(users);
    expect(pipe.transform(users, ['id', 'phone'], 4)).toEqual([users[3]]);
    expect(pipe.transform(users, ['id', 'phone'], null)).toEqual(users);
    expect(pipe.transform(users, null, null)).toEqual(users);
    expect(pipe.transform(users, [], [])).toEqual(users);
  });

  describe('strict mode', () => {
    const users: Array<any> = [{id: 1, user: {first_name: 'foo', last_name: 'bar', mobile: 4444}}];

    it('should only return exact matches', () => {
      expect(pipe.transform(users, ['user.first_name'], 'fo', true)).toEqual([]);
      expect(pipe.transform(users, ['user.first_name'], 'foo', true)).toEqual(users);
    });

    it('should handle multiple properties', () => {
      expect(pipe.transform(users, ['user.first_name', 'user.last_name'], 'ba', true)).toEqual([]);
      expect(pipe.transform(users, ['user.first_name', 'user.last_name'], 'bar', true))
          .toEqual(users);
    });

    it('should handle concatenation', () => {
      expect(pipe.transform(users, ['user.first_name + user.last_name'], 'foo ba', true)).toEqual([
      ]);
      expect(pipe.transform(users, ['user.first_name + user.last_name'], 'foo bar', true))
          .toEqual(users);
    });
  });

});
