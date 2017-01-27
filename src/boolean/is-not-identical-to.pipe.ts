import {Pipe, PipeTransform} from '@angular/core';

import {equals} from '../utils/utils';

@Pipe({name: 'isNotIdenticalTo'})
export class IsNotIdenticalToPipe implements PipeTransform {
  transform(input: any, check: any): boolean {
    return !equals(input, check);
  }
}
