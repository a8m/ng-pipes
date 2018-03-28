import {FuzzyPipe} from '../../src/collection/fuzzy.pipe';

describe('FuzzyPipe', () => {
  let pipe: FuzzyPipe, collection = [
    {title: 'The DaVinci Code', author: 'F. Scott Fitzgerald'},
    {title: 'The Great Gatsby', author: 'Dan Browns'},
    {title: 'Angels & Demons', author: 'Dan Louis'},
    {title: 'The Lost Symbol', author: 'David Maine'},
    {title: 'Old Man\'s War', author: 'Rob Grant'}
  ];

  beforeEach(() => {
    pipe = new FuzzyPipe();
  });

  it('should get array as collection, search, and pipe.transform by fuzzy searching', () => {
    // search by title
    expect(pipe.transform(collection, 'tha')).toEqual([collection[0], collection[1]]);
    expect(pipe.transform(collection, 'thesy')).toEqual([collection[1], collection[3]]);
    expect(pipe.transform(collection, 'omwar')).toEqual([collection[4]]);

    // search by author
    expect(pipe.transform(collection, 'sfd')).toEqual([collection[0]]);
    expect(pipe.transform(collection, 'danos')).toEqual([collection[1], collection[2]]);
    expect(pipe.transform(collection, 'rgnt')).toEqual([collection[4]]);
  });

  it('should be case sensitive if set to true', () => {
    expect(pipe.transform(collection, 'tha', true)).toEqual([]);
    expect(pipe.transform(collection, 'thesy', true)).toEqual([]);
    expect(pipe.transform(collection, 'omwar', true)).toEqual([]);
    expect(pipe.transform(collection, 'TDC', true)).toEqual([collection[0]]);
    expect(pipe.transform(collection, 'ThLSy', true)).toEqual([collection[3]]);
    expect(pipe.transform(collection, 'OldWar', true)).toEqual([collection[4]]);
  });

  it('should get array of strings, search, and pipe.transform by fuzzy searching', () => {
    const array: Array<any> =
        ['Dan Brown', 'Dan Louis', 'David Maine', 'Rob Grant', 'F. Scott Fitzgerald'];

    expect(pipe.transform(array, 'da')).toEqual(['Dan Brown', 'Dan Louis', 'David Maine']);
    expect(pipe.transform(array, 'oa')).toEqual(['Rob Grant', 'F. Scott Fitzgerald']);
    expect(pipe.transform(array, 'S', true)).toEqual(['F. Scott Fitzgerald']);
  });

});
