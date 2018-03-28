import {IsEmptyPipe} from '../../src/collection/is-empty.pipe';

describe('IsEmptyPipe', () => {
  let pipe: IsEmptyPipe;

  beforeEach(() => {
    pipe = new IsEmptyPipe();
  });

  it('length of collection', () => {
    expect(pipe.transform([1, 2, 3])).toEqual(3);
    expect(pipe.transform({0: 'a', 1: 'b', 2: 'c'})).toEqual(3);
  });

});
