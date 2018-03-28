import {LeftPadPipe} from '../../src/string/left-pad.pipe';

describe('LeftPadPipe', () => {
  let pipe: LeftPadPipe;

  beforeEach(() => {
    pipe = new LeftPadPipe();
  });

  const data: Array<any> = [
    {'input': 'a', 'requiredLength': 6, 'toEqual': '     a', 'valid': true},
    {'input': 'abc', 'padChar': '123456', 'requiredLength': 6, 'toEqual': '123abc', 'valid': true},
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
      'toEqual': 'foofoofabc',
      'valid': true
    },
    {'input': 'abc', 'padChar': '0', 'requiredLength': 10, 'toEqual': '0000000abc', 'valid': true},
    {'input': null, 'padChar': '0', 'requiredLength': 10, 'toEqual': '000000null', 'valid': false},
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
