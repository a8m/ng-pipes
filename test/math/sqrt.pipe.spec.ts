import {SqrtPipe} from '../../src/math/sqrt.pipe';

describe('SqrtPipe', () => {
  let pipe: SqrtPipe;

  beforeEach(() => {
    pipe = new SqrtPipe();
  });

  const data: Array<any> = [
    {'input': 2, 'toEqual': 1.4142135623730951, 'valid': true},
    {'input': 3, 'toEqual': 1.7320508075688772, 'valid': true},
    {'input': 111, 'toEqual': 10.535653752852738, 'valid': true},
    {'input': null, 'toEqual': 5, 'valid': false},
    {'input': undefined, 'toEqual': 5, 'valid': false}
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
