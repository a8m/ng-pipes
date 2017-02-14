import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isEqualTo'})
export class IsEqualToPipe implements PipeTransform {
  transform(input: any, check: any): boolean {
    input += '';
    check += '';
    return input === check;
  }
}
