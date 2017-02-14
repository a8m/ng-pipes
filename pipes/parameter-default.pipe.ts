import {Pipe, PipeTransform} from '@angular/core';
import {Parameter} from '../syntax-parser';

@Pipe({name: 'npParameterDefault'})
export class ParameterDefaultPipe implements PipeTransform {
  transform(parameter: Parameter) {
    return parameter.initializer ? '(default ' + parameter.initializer + ')' : '';
  }
}
