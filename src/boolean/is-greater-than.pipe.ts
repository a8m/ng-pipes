import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isGreaterThan'})
export class IsGreaterThanPipe implements PipeTransform {
  transform(input: number, check: number): boolean {
    return input > check;
  }
}
