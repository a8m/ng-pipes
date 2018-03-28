import {ValuesPipe} from '../../src/object/values.pipe';

describe('ValuesPipe', () => {
  let pipe: ValuesPipe;

  beforeEach(() => {
    pipe = new ValuesPipe();
  });

  const data: Array<any> = [
    {'input': {'key1': 1}, 'toEqual': [1], 'valid': true},
    {'input': {'key1': 1, 'key2': 2, 'key3': 3}, 'toEqual': [1, 2, 3], 'valid': true}, {
      'input': {'key1': 1, null: 1, undefined: 2, false: 3, true: 4},
      'toEqual': [1, 1, 2, 3, 4],
      'valid': true
    },
    {'input': '', 'toEqual': '', 'valid': true}, {'input': 1, 'toEqual': 1, 'valid': true},
    {'input': [], 'toEqual': [], 'valid': true}, {'input': null, 'toEqual': [null], 'valid': false},
    {'input': undefined, 'toEqual': [undefined], 'valid': false}
  ];

  for (const element of data) {
    const testCase = `Input ${JSON.stringify(element.input)} should be ${element.valid ?
        'equal' :
        'not equal'
        } to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.input)).toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.input)).not.toEqual(element.toEqual);
      }
    });
  }

});
