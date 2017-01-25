import {MatchPipe} from '../../src/index';

describe('MatchPipe', () => {
  let pipe: MatchPipe;
  beforeEach(() => {
    pipe = new MatchPipe();
  });

  it('should test a string with given pattern', () => {
    expect(pipe.transform('15/12/2003', '\\d+', 'g')).toEqual(['15', '12', '2003']);
    expect(pipe.transform('foobarbaz', '[a-z]{3}', 'g')).toEqual(['foo', 'bar', 'baz']);
  });
});
