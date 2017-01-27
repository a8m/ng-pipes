import {Pipe, PipeTransform} from '@angular/core';

import {equals} from '../utils/utils';

@Pipe({name: 'isIdenticalTo'})
export class IsIdenticalToPipe implements PipeTransform {
  transform(input: any, check: any): boolean {
    return equals(input, check);
  }
}
