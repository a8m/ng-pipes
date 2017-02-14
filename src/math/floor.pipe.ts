import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'floor'})
export class FloorPipe implements PipeTransform {
  transform(input: any, precision: any = 0): number {
    const num: number = parseFloat(input);
    const prec: number = parseInt(precision, 10);

    if (isNaN(num)) return input;

    if (isNaN(prec) || prec <= 0) {
      return Math.floor(num);
    } else {
      const pow: number = Math.pow(10, precision);

      return Math.floor(num * pow) / pow;
    }
  }
}
