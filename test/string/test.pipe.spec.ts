import {TestPipe} from '../../src/string/test.pipe';

describe('TestPipe', () => {
  let pipe: TestPipe;

  beforeEach(() => {
    pipe = new TestPipe();
  });

  it('should test a string with given pattern', () => {
    expect(pipe.transform('15/12/2003', '^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$', 'i'))
        .toBeTruthy();
    expect(pipe.transform('foobarbaz', '^[a-z]{3,}$')).toBeTruthy();
    expect(pipe.transform('FOOBARBAZ', '^[a-z]{3,}$', 'i')).toBeTruthy();
    expect(pipe.transform('FOOBARBAZ', '^[a-z]{3,}$')).toBeFalsy();
    expect(pipe.transform('foobarbaz', '\\W')).toBeFalsy();
    expect(pipe.transform('foobarbaz', '\\w')).toBeTruthy();
    expect(pipe.transform('1a/bb/2003', '^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$', 'i')).toBeFalsy();
  });

});
