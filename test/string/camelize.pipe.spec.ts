import {CamelizePipe} from '../../src/string/camelize.pipe';

describe('CamelizePipe', () => {
  let pipe: CamelizePipe;

  beforeEach(() => {
    pipe = new CamelizePipe();
  });

  const data: Array<any> = [
    {'value': 'a_simple_word', 'toEqual': 'aSimpleWord', 'valid': true},
    {'value': 'a_medium_word_here', 'toEqual': 'aMediumWordHere', 'valid': true},
    {'value': 'ANUPPERCASEDWORDHERE', 'toEqual': 'anuppercasedwordhere', 'valid': true},
    {'value': 'alowercasedword', 'toEqual': 'alowercasedword', 'upperFirst': false, 'valid': true},
    {'value': '     s', 'toEqual': 'S', 'upperFirst': true, 'valid': true},
    {'value': '  SOME WHITE SPACES  ', 'toEqual': 'someWhiteSpaces', 'valid': true}, {
      'value': '  SOME-WHITE-SPACES  ',
      'toEqual': 'SomeWhiteSpaces',
      'upperFirst': true,
      'valid': true
    },
    {'value': '-1  SOME-WHITE-SPACES0  2-', 'toEqual': '1SomeWhiteSpaces02', 'valid': true},
    {'value': null, 'toEqual': 'aSimpleWord', 'valid': false},
    {'value': undefined, 'toEqual': 'aMediumWordHere', 'valid': false},
    {'value': 'ANUPPERCASEDWORDHERe', 'toEqual': 'aNUPPERCASEDWORDHERE', 'valid': false}
  ];

  for (const element of data) {
    const testCase = `${element.value} should be ${element.valid ? 'equal' :
                                                                   'not equal'
                                                                   } to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.value, element.upperFirst)).toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.value, element.upperFirst)).not.toEqual(element.toEqual);
      }
    });
  }

});
