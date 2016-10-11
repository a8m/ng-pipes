import { Pipe, PipeTransform } from '@angular/core';
import { isNumber, isString } from '../utils/utils';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {
  transform(input: any, divided: number=100, round: boolean=false): any {
    let divider: any = input;
    if (isString(input)) {
      divider = Number(input);
    }
    if (!isNumber(divider) || isNaN(divider)) {
      return input;
    }
    return round
      ? Math.round((divider / divided) * 100)
      : (divider / divided) * 100;
  }
}
