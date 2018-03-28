import {MeanPipe} from '../../src/collection/mean.pipe';

describe('MeanPipe', () => {
  let pipe: MeanPipe;

  beforeEach(() => {
    pipe = new MeanPipe();
  });

  const data: Array<any> = [
    {'input': [], 'toEqual': undefined, 'valid': true},
    {'input': [0, 0, 0], 'toEqual': 0, 'valid': true},
    {'input': [1, 2, 3], 'toEqual': 2, 'valid': true},
    {'input': [7, 7, 7, 7], 'toEqual': 7, 'valid': true},
    {'input': [1, 9, 20, 30], 'toEqual': 15, 'valid': true},
    {'input': [2.5, 3.5, 4.5, 5.5, 6.5], 'toEqual': 4.5, 'valid': true},
    {'input': '', 'toEqual': undefined, 'valid': true},
    {'input': 1, 'toEqual': undefined, 'valid': true},
    {'input': {}, 'toEqual': undefined, 'valid': true},
    {'input': {'key': 1}, 'toEqual': 1, 'valid': true},
    {'input': {'key': 20}, 'toEqual': 20, 'valid': true},
    {'input': [{'key': 1}, {'key': 2}, {'key': 20}], 'toEqual': 0, 'valid': true},
    {'input': null, 'toEqual': 0, 'valid': false},
    {'input': undefined, 'toEqual': 0, 'valid': false},
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
