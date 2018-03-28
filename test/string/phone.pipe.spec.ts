import {PhonePipe} from '../../src/string/phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;

  beforeEach(() => {
    pipe = new PhonePipe();
  });

  describe('locale: en-US', () => {

    const phoneDataProvider: Array<any> = [
      {'phone': '123', 'toEqual': '123', 'valid': true},
      {'phone': '1234567890', 'toEqual': '(123) 456-7890', 'valid': true},
      {'phone': '123-456-7890', 'toEqual': '(123) 456-7890', 'valid': true},
      {'phone': '(123) 456-7890', 'toEqual': '(123) 456-7890', 'valid': true}, {
        'phone': '1123 4567890',
        'showCountryCode': true,
        'toEqual': '+1 (123) 456-7890',
        'valid': true
      },
      {'phone': '1123 4567890', 'showCountryCode': true, 'toEqual': '123123', 'valid': false},
      {'phone': '1123 4567890', 'showCountryCode': true, 'toEqual': null, 'valid': false},
      {'phone': null, 'showCountryCode': true, 'toEqual': '123', 'valid': false}
    ];

    for (const data of phoneDataProvider) {
      const testCase = `${data.phone} should be ${data.valid ? 'equal' :
                                                               'not equal'
                                                               } to ${data.toEqual}`;

      it(testCase, () => {
        if (data.valid) {
          expect(pipe.transform(data.phone, data.locale, data.showCountryCode))
              .toEqual(data.toEqual);
        } else {
          expect(pipe.transform(data.phone, data.locale, data.showCountryCode))
              .not.toEqual(data.toEqual);
        }
      });
    }

  });

  describe('locale: pt-BR', () => {

    const phoneDataProvider: Array<any> = [
      {'phone': '99999999999', 'locale': 'pt-BR', 'toEqual': '(99) 99999-9999', 'valid': true},
      {'phone': '99-99999-9999', 'locale': 'pt-BR', 'toEqual': '(99) 99999-9999', 'valid': true},
      {'phone': '(99) 99999-9999', 'locale': 'pt-BR', 'toEqual': '(99) 99999-9999', 'valid': true},
      {
        'phone': '55(99) 99999-9999',
        'locale': 'pt-BR',
        'showCountryCode': true,
        'toEqual': '+55 (99) 99999-9999',
        'valid': true
      },
      {
        'phone': '99999999999',
        'locale': 'pt-BR',
        'showCountryCode': true,
        'toEqual': '123123',
        'valid': false
      },
      {
        'phone': '99999999999',
        'locale': 'pt-BR',
        'showCountryCode': true,
        'toEqual': null,
        'valid': false
      },
      {
        'phone': null,
        'locale': 'pt-BR',
        'showCountryCode': true,
        'toEqual': '123',
        'valid': false
      }
    ];

    for (const data of phoneDataProvider) {
      const testCase = `${data.phone} should be ${data.valid ? 'equal' :
                                                               'not equal'
                                                               } to ${data.toEqual}`;

      it(testCase, () => {
        if (data.valid) {
          expect(pipe.transform(data.phone, data.locale, data.showCountryCode))
              .toEqual(data.toEqual);
        } else {
          expect(pipe.transform(data.phone, data.locale, data.showCountryCode))
              .not.toEqual(data.toEqual);
        }
      });
    }

  });

  describe('locale: unknown', () => {

    const phoneDataProvider: Array<any> = [
      {'phone': '123', 'locale': 'xx-x', 'toEqual': '123', 'valid': true}, {
        'phone': '1234',
        'locale': 'xx-xx',
        'showCountryCode': true,
        'toEqual': '1234',
        'valid': true
      },
      {'phone': null, 'locale': 'xx-2x', 'showCountryCode': true, 'toEqual': null, 'valid': true},
      {'phone': null, 'locale': 'xx-2x', 'showCountryCode': true, 'toEqual': '123', 'valid': false},
      {
        'phone': '123',
        'locale': 'xx-2x',
        'showCountryCode': true,
        'toEqual': null,
        'valid': false
      }
    ];

    for (const data of phoneDataProvider) {
      const testCase = `${data.phone} should be ${data.valid ? 'equal' :
                                                               'not equal'
                                                               } to ${data.toEqual}`;

      it(testCase, () => {
        if (data.valid) {
          expect(pipe.transform(data.phone, data.locale, data.showCountryCode))
              .toEqual(data.toEqual);
        } else {
          expect(pipe.transform(data.phone, data.locale, data.showCountryCode))
              .not.toEqual(data.toEqual);
        }
      });
    }

  });

});
