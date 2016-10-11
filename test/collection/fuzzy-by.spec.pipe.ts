import { FuzzyByPipe } from '../../src/index';

describe('FuzzyByPipe', () => {
	let pipe: FuzzyByPipe
		, collection = [
      { title: 'The DaVinci Code' },
      { title: 'The Great Gatsby' },
      { title: 'Angels & Demons'  },
      { title: 'The Lost Symbol'  },
      { title: 'Old Man\'s War'   }
    ];
	beforeEach(() => {
		pipe = new FuzzyByPipe();
	});

	it('should get array as collection, property, search, and pipe.transform by fuzzy searching', function() {
    expect(pipe.transform(collection, 'title', 'tha')).toEqual([collection[0], collection[1]]);
    expect(pipe.transform(collection, 'title', 'thesy')).toEqual([collection[1], collection[3]]);
    expect(pipe.transform(collection, 'title', 'omwar')).toEqual([collection[4]]);
  });

  it('should be case sensitive if set to true', function() {
    expect(pipe.transform(collection, 'title', 'tha', true)).toEqual([]);
    expect(pipe.transform(collection, 'title', 'thesy', true)).toEqual([]);
    expect(pipe.transform(collection, 'title', 'omwar', true)).toEqual([]);

    expect(pipe.transform(collection, 'title', 'TDC', true)).toEqual([collection[0]]);
    expect(pipe.transform(collection, 'title', 'ThLSy', true)).toEqual([collection[3]]);
    expect(pipe.transform(collection, 'title', 'OldWar', true)).toEqual([collection[4]]);
  });

  it('should support nested properties', function() {
    let collection = [
      { details: { title: 'The DaVinci Code' } },
      { details: { title: 'The Great Gatsby' } },
      { details: { title: 'Angels & Demons'  } },
      { details: { title: 'The Lost Symbol'  } },
      { details: { title: 'Old Man\'s War'   } }
    ];

    expect(pipe.transform(collection, 'details.title', 'tha')).toEqual([collection[0], collection[1]]);
    expect(pipe.transform(collection, 'details.title', 'thesy')).toEqual([collection[1], collection[3]]);
    expect(pipe.transform(collection, 'details.title', 'omwar')).toEqual([collection[4]]);
  });
});
