import {Pipe, PipeTransform} from '@angular/core';

import {getPhone, isNil} from '../utils/utils';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {
  transform(input: string, locale: string = 'en-US', showCountryCode: boolean = false): string {
    if (isNil(input) || !/^[a-zA-Z]{2}-[a-zA-Z]{2}$/.test(locale)) return input;

    const strInput: string = input.replace(/[^0-9]/g, '');
    const splittedLocale = locale.split('-');
    const formattedLocale: string =
        `${splittedLocale[0].toLowerCase()}-${splittedLocale[1].toUpperCase()}`;
    const phoneObj: any = getPhone(formattedLocale);

    if (isNil(phoneObj) || strInput.length < phoneObj.minLength) return input;

    const pattern: RegExp = phoneObj.pattern;
    const matches: Array<string> = strInput.match(pattern);
    let formattedPhone: string = '';

    switch (formattedLocale) {
      case 'en-US':
      case 'pt-BR':
        formattedPhone = `(${matches[2]}) ${matches[3]}-${matches[4]}`;
        break;
    }

    if (showCountryCode) {
      formattedPhone = `${phoneObj.countryCode} ${formattedPhone}`
    }

    return formattedPhone;
  }
}
