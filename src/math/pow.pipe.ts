import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pow'})
export class PowPipe implements PipeTransform {
  transform(input: any, power: any = 2): number {
    const num: number = parseFloat(input);
    const parsed: number = parseInt(power);

    if (isNaN(num)) return input;

    return Math.pow(num, (isNaN(parsed)) ? 2 : parsed);
  }
}
