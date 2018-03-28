import {ReversePipe} from '../../src/collection/reverse.pipe';

describe('RemoveWithPipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should reverse string and array', () => {
    expect(pipe.transform('foo')).toEqual('oof');
    expect(pipe.transform('foo 𝌆 bar mañana mañana')).toEqual('anañam anañam rab 𝌆 oof');
    expect(pipe.transform([1, 2])).toEqual([2, 1]);
  });

});
