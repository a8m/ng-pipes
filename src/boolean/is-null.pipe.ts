import {Pipe, PipeTransform} from '@angular/core';
import {isNull} from '../utils/utils';

@Pipe({name: 'isNull'})
export class IsNullPipe implements PipeTransform {
  transform(input: any): boolean {
    return isNull(input);
  }
}
