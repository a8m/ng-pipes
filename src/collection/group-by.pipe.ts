import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, getFirstMatches, isNumber, isUndefined } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, prop: string): {[key: string]: Array<any>} {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    let result: {[key: string]: Array<any>} = {}
      , getter = this.$parse(prop)
      ;
    collection.forEach((elm: any) => {
      let prop = getter(elm);
      if(isUndefined(result[prop])) {
        result[prop] = [];
      }
      result[prop].push(elm);
    });
    return result;
  }
}
