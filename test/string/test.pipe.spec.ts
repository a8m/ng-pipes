import { TestPipe } from '../../src/index';

describe('TestPipe', () => {
	let pipe: TestPipe;
	beforeEach(() => {
		pipe = new TestPipe();
	});

	it('should test a string with given pattern', function() {
    expect(pipe.transform('15/12/2003', '^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$', 'i')).toEqual(true);
    expect(pipe.transform('foobarbaz', '^[a-z]{3,}$')).toEqual(true);
    expect(pipe.transform('FOOBARBAZ', '^[a-z]{3,}$', 'i')).toEqual(true);
    expect(pipe.transform('FOOBARBAZ', '^[a-z]{3,}$')).toEqual(false);
    expect(pipe.transform('foobarbaz', '\\W')).toEqual(false);
    expect(pipe.transform('foobarbaz', '\\w')).toEqual(true);
    expect(pipe.transform('1a/bb/2003', '^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$', 'i')).toEqual(false);
  });
});
