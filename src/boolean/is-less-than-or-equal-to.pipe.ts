import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isLessThanOrEqualTo'})
export class IsLessThanOrEqualToPipe implements PipeTransform {
  transform(input: number, check: number): boolean {
    return input <= check;
  }
}
