import {InvertPipe} from '../../src/object/invert.pipe';

describe('InvertPipe', () => {
  let pipe: InvertPipe;

  beforeEach(() => {
    pipe = new InvertPipe();
  });

  const data: Array<any> = [
    {'input': {'key1': 1}, 'toEqual': {1: ['key1']}, 'valid': true}, {
      'input': {'key1': 1, 'key2': 2, 'key3': 3},
      'toEqual': {1: ['key1'], 2: ['key2'], 3: ['key3']},
      'valid': true
    },
    {
      'input': {'key1': 1, null: 1, undefined: 2, false: 3, true: 4},
      'toEqual': {1: ['key1', 'null'], 2: ['undefined'], 3: ['false'], 4: ['true']},
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
