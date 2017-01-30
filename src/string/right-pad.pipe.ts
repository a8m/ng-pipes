import {Pipe, PipeTransform} from '@angular/core';

import {isString, pad} from '../utils/utils';

@Pipe({name: 'rightPad'})
export class RightPadPipe implements PipeTransform {
  transform(input: string, requiredLength: number, padChar: string = ' '): string {
    if (!isString(input) || input.length >= requiredLength) return input;

    const diff: number = requiredLength - input.length;

    return `${input}${pad(diff, padChar)}`;
  }
}
