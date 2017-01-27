import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isGreaterThanOrEqualTo'})
export class IsGreaterThanOrEqualToPipe implements PipeTransform {
  transform(input: number, check: number): boolean {
    return input >= check;
  }
}
