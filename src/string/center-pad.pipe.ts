import {Pipe, PipeTransform} from '@angular/core';

import {isString, pad} from '../utils/utils';

@Pipe({name: 'centerPad'})
export class CenterPadPipe implements PipeTransform {
  transform(input: string, requiredLength: number, padChar: string = ' '): string {
    if (!isString(input) || input.length >= requiredLength) return input;

    const diff: number = requiredLength - input.length;
    const left: number = Math.ceil(diff / 2);
    const right: number = Math.floor(diff / 2);

    return `${pad(left, padChar)}${input}${pad(right, padChar)}`;
  }
}
