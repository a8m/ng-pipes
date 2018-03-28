import {ToArrayPipe} from '../../src/collection/to-array.pipe';

describe('ToArrayPipe', () => {
  let pipe: ToArrayPipe;

  beforeEach(() => {
    pipe = new ToArrayPipe();
  });

  it('should convert an object to an array of values', () => {
    const object: any = {0: {f: 'foo'}, 1: {b: 'bar'}, 2: {b: 'baz'}};

    expect(pipe.transform(object)).toEqual([object[0], object[1], object[2]]);
    expect(pipe.transform({0: 0, 1: 1, 2: 2})).toEqual([0, 1, 2]);
  });

  it('should add $key property if addKey param is true', () => {
    const object: any = {0: {f: 'foo'}, 1: {b: 'bar'}, 2: {b: 'baz'}};

    expect(pipe.transform(object, true)).toEqual([
      {$key: '0', f: 'foo'}, {$key: '1', b: 'bar'}, {$key: '2', b: 'baz'}
    ]);
  });

});
