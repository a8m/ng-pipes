import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform(input: any, precision: any = 0): number {
    const num: number = parseFloat(input);
    const prec: number = parseInt(precision);

    if (isNaN(num)) return input;

    if (isNaN(prec) || prec <= 0) {
      return Math.round(num);
    } else {
      const pow: number = Math.pow(10, precision);

      return Math.round(num * pow) / pow;
    }
  }
}
