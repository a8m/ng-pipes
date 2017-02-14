import {Pipe, PipeTransform} from '@angular/core';
import {Parse} from '../utils/parse';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(array: Array<any>, ...attrs: any[]): Array<any> {
    // generate an array of predicate-objects contains
    // property getter, and descending indicator
    let predicates = attrs.map(pred => {
      let descending = pred.charAt(0) === '-' ? -1 : 1;
      pred = pred.replace(/^-/, '');
      return {getter: (o: any) => this.$parse(pred)(o), descend: descending};
    });
    // schwartzian transform idiom implementation. aka:
    // "decorate-sort-undecorate"
    return array
        .map(item => {
          return {src: item, compareValues: predicates.map(predicate => predicate.getter(item))};
        })
        .sort((o1: any, o2: any) => {
          let i = -1;
          let result = 0;
          while (++i < predicates.length) {
            if (o1.compareValues[i] < o2.compareValues[i]) {
              result = -1;
            }
            if (o1.compareValues[i] > o2.compareValues[i]) {
              result = 1;
            }
            result *= predicates[i].descend;
            if (result) {
              break;
            }
          }
          return result;
        })
        .map(item => item.src);
  }
}
