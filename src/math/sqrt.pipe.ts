import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sqrt'})
export class SqrtPipe implements PipeTransform {
  transform(input: any): number {
    const num: number = +input;

    if (isNaN(num)) return input;

    return Math.sqrt(num);
  }
}
