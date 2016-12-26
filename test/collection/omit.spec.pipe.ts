import { OmitPipe } from '../../src/index';

describe('OmitPipe', () => {
  let pipe: OmitPipe;
  beforeEach(() => {
    pipe = new OmitPipe();
  });

  it('should returns a new collection of the results of each expression execution', function() {

    var array = [
      { id: 1, name: 'foo', active: true },
      { id: 2, name: 'baz', active: true },
      { id: 1, name: 'ariel', active: true },
      { id: 1, name: 'bar', active: false }
    ];
    expect(pipe.transform(array, 'active')).toEqual([array[3]]);
  });


  it('should omit elements that match the expression', function() {
    expect(pipe.transform([1, 2, 3, 4, 5, 6], (e: number) => e > 2)).toEqual([1, 2]);
  });
});
