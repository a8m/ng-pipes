import {CenterPadPipe} from '../../src/string/center-pad.pipe';

describe('CenterPadPipe', () => {
  let pipe: CenterPadPipe;

  beforeEach(() => {
    pipe = new CenterPadPipe();
  });

  const data: Array<any> = [
    {'input': 'a', 'requiredLength': 6, 'toEqual': '   a  ', 'valid': true},
    {'input': 'abc', 'padChar': '123456', 'requiredLength': 6, 'toEqual': '12abc1', 'valid': true},
    {
      'input': 'abcdef',
      'padChar': '123456',
      'requiredLength': 2,
      'toEqual': 'abcdef',
      'valid': true
    },
    {'input': 'abcdef', 'padChar': '0', 'requiredLength': 6, 'toEqual': 'abcdef', 'valid': true}, {
      'input': 'abc',
      'padChar': 'foo',
      'requiredLength': 10,
      'toEqual': 'foofabcfoo',
      'valid': true
    },
    {'input': 'abc', 'padChar': '0', 'requiredLength': 10, 'toEqual': '0000abc000', 'valid': true},
    {'input': null, 'padChar': '0', 'requiredLength': 10, 'toEqual': '000null000', 'valid': false},
    {
      'input': undefined,
      'padChar': '0',
      'requiredLength': 10,
      'toEqual': '0undefined',
      'valid': false
    }
  ];

  for (const element of data) {
    const testCase =
        `Input ${JSON.stringify(element.input)} with padChar ('${element
            .padChar}') and requiredLength (${element.requiredLength}) should be ${element.valid ?
        'equal' :
        'not equal'
        } to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.input, element.requiredLength, element.padChar))
            .toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.input, element.requiredLength, element.padChar))
            .not.toEqual(element.toEqual);
      }
    });
  }

});
