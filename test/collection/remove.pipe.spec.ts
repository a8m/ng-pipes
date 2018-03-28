import {RemovePipe} from '../../src/collection/remove.pipe';

describe('RemovePipe', () => {
  let pipe: RemovePipe;

  beforeEach(() => {
    pipe = new RemovePipe();
  });

  it('should remove elements by checking equality', () => {
    expect(pipe.transform([1, 'a', 2, 'b'], 1, 'a')).toEqual([2, 'b']);
  });

});
