import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, isUndefined, deepKeys } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'defaults'
})
export class DefaultsPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, defaults: { [key: string]: any }): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    if (!isArray(collection)) {
      return collection;
    }

    let getters = deepKeys(defaults).map((key: string) => this.$parse(key));

    collection.forEach((elm: { [key: string]: any }) => {
      getters.forEach((getter: any, i: number) => {
        if (isUndefined(getter(elm))) {
          getter.assign(elm, getter(defaults));
        }
      });
    });

    return collection;
  }
}
