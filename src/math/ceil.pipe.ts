import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ceil'})
export class CeilPipe implements PipeTransform {
  transform(input: any, precision: any = 0): number {
    const num: number = parseFloat(input);
    const prec: number = parseInt(precision);

    if (isNaN(num)) return input;

    if (isNaN(prec) || prec <= 0) {
      return Math.ceil(num);
    } else {
      const pow: number = Math.pow(10, precision);

      return Math.ceil(num * pow) / pow;
    }
  }
}
