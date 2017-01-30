import {CeilPipe} from '../../src/index';

describe('CeilPipe', () => {
  let pipe: CeilPipe;

  beforeEach(() => {
    pipe = new CeilPipe();
  });

  const data: Array<any> = [
    {'input': 0.1, 'toEqual': 1, 'valid': true}, {'input': 1.5, 'toEqual': 2, 'valid': true},
    {'input': 2.8, 'toEqual': 3, 'valid': true}, {'input': 3, 'toEqual': 3, 'valid': true},
    {'input': 4.5, 'toEqual': 5, 'valid': true},
    {'input': 5.5, 'precision': 1, 'toEqual': 5.5, 'valid': true},
    {'input': 5.5333, 'precision': 1, 'toEqual': 5.6, 'valid': true},
    {'input': 6.6444, 'precision': 2, 'toEqual': 6.65, 'valid': true},
    {'input': 7.7555, 'precision': 3, 'toEqual': 7.756, 'valid': true},
    {'input': null, 'toEqual': 5, 'valid': false},
    {'input': undefined, 'toEqual': 5, 'valid': false}
  ];

  for (const element of data) {
    const testCase =
        `Input '${element.input}' with precision (${element.precision}) should be ${element.valid ?
        'equal' :
        'not equal'
        } to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.input, element.precision)).toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.input, element.precision)).not.toEqual(element.toEqual);
      }
    })
  }

});
