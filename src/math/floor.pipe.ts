import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'floor'})
export class FloorPipe implements PipeTransform {
  transform(input: any, precision: number = 0): number {
    const num: number = +input;

    if (isNaN(num)) return input;

    const pow: number = Math.pow(10, precision);

    return precision <= 0 ? Math.floor(num) : Math.floor(num * pow) / pow;
  }
}
