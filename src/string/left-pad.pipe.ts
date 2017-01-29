import {Pipe, PipeTransform} from '@angular/core';

import {isString} from '../utils/utils';

@Pipe({name: 'leftPad'})
export class LeftPadPipe implements PipeTransform {
  transform(input: string, requiredLength: number, padChar: string = ' '): string {
    if (!isString(input) || input.length >= requiredLength) return input;

    const diff: number = requiredLength - input.length;

    return padChar.repeat(diff).slice(0, diff) + input;
  }
}
