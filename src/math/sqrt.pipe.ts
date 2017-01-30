import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sqrt'})
export class SqrtPipe implements PipeTransform {
  transform(input: any): number {
    const num: number = parseInt(input);

    return isNaN(num) ? input : Math.sqrt(num);
  }
}
