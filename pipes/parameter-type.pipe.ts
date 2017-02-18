import {Pipe, PipeTransform} from '@angular/core';
import {Parameter} from '../syntax-parser';
const types = require('types.json');

@Pipe({name: 'npParameterType'})
export class ParameterTypePipe implements PipeTransform {
  transform(parameter: Parameter) {
    if (!types[parameter.kind]) {
      return '[unknown]';
    }
    let name = types[parameter.kind].name;
    return name ? name : '[unknown]';
  }
}
