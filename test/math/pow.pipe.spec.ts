import {PowPipe} from '../../src/math/pow.pipe';

describe('PowPipe', () => {
  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe();
  });

  const data: Array<any> = [
    {'input': 1, 'pow': 1, 'toEqual': 1, 'valid': true},
    {'input': 1, 'pow': 1, 'toEqual': 1, 'valid': true},
    {'input': 2, 'pow': 2, 'toEqual': 4, 'valid': true},
    {'input': 10, 'pow': 10, 'toEqual': 10000000000, 'valid': true},
    {'input': 10, 'pow': '5', 'toEqual': 100000, 'valid': true},
    {'input': '10', 'pow': '5', 'toEqual': 100000, 'valid': true},
    {'input': 'aaa', 'pow': '5', 'toEqual': 'aaa', 'valid': true},
    {'input': '10000', 'pow': 'rrr', 'toEqual': 100000000, 'valid': true},
    {'input': 'aaa', 'pow': 'rrr', 'toEqual': 'aaa', 'valid': true},
    {'input': '', 'toEqual': '', 'valid': true}, {'input': [], 'toEqual': [], 'valid': true},
    {'input': {}, 'toEqual': {}, 'valid': true}, {'input': null, 'toEqual': 5, 'valid': false},
    {'input': undefined, 'toEqual': 5, 'valid': false}
  ];

  for (const element of data) {
    const testCase =
        `Input ${JSON.stringify(
                         element.input)} with pow (${element.pow}) should be ${element.valid ?
        'equal' :
        'not equal'
        } to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.input, element.pow)).toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.input, element.pow)).not.toEqual(element.toEqual);
      }
    });
  }

});
