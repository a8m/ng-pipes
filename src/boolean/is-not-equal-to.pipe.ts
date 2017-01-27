import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isNotEqualTo'})
export class IsNotEqualToPipe implements PipeTransform {
  transform(input: any, check: any): boolean {
    return input != check;
  }
}
