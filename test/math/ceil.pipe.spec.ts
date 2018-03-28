import {CeilPipe} from '../../src/math/ceil.pipe';

describe('CeilPipe', () => {
  let pipe: CeilPipe;

  beforeEach(() => {
    pipe = new CeilPipe();
  });

  const data: Array<any> = [
    {'input': 0.1, 'toEqual': 1, 'valid': true}, {'input': 1.5, 'toEqual': 2, 'valid': true},
    {'input': 2.8, 'toEqual': 3, 'valid': true}, {'input': 3, 'toEqual': 3, 'valid': true},
    {'input': 4.5, 'toEqual': 5, 'valid': true},
    {'input': 5.2, 'precision': -1, 'toEqual': 6, 'valid': true},
    {'input': 5.2, 'precision': 0, 'toEqual': 6, 'valid': true},
    {'input': 5.5, 'precision': 1, 'toEqual': 5.5, 'valid': true},
    {'input': 6.5444, 'precision': 1, 'toEqual': 6.6, 'valid': true},
    {'input': 7.6444, 'precision': 2, 'toEqual': 7.65, 'valid': true},
    {'input': 8.7555, 'precision': 3, 'toEqual': 8.756, 'valid': true},
    {'input': 9.86666, 'precision': '4', 'toEqual': 9.8667, 'valid': true},
    {'input': '10.977777', 'precision': '5', 'toEqual': 10.97778, 'valid': true},
    {'input': 'aaa', 'precision': '5', 'toEqual': 'aaa', 'valid': true},
    {'input': '10000', 'precision': 'rrr', 'toEqual': 10000, 'valid': true},
    {'input': 'aaa', 'precision': 'rrr', 'toEqual': 'aaa', 'valid': true},
    {'input': null, 'toEqual': 5, 'valid': false},
    {'input': undefined, 'toEqual': 5, 'valid': false}
  ];

  for (const element of data) {
    const testCase =
        `Input ${JSON.stringify(element.input)} with precision (${element.precision}) should be ${
            element.valid ? 'equal' : 'not equal'} to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.input, element.precision)).toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.input, element.precision)).not.toEqual(element.toEqual);
      }
    });
  }
});
