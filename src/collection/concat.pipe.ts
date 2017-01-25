import {Pipe, PipeTransform} from '@angular/core';

import {isArray, toArray} from '../utils/utils';

@Pipe({name: 'concat'})
export class ConcatPipe implements PipeTransform {
  transform(collection: any, joined: any): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    if (!isArray(joined)) {
      joined = toArray(joined);
    }
    return collection.concat(joined);
  }
}
