import {Pipe, PipeTransform} from '@angular/core';
import {SyntaxParameter} from '../../../scripts/syntax-types';

@Pipe({name: 'npParameterDefault'})
export class ParameterDefaultPipe implements PipeTransform {
  transform(parameter: SyntaxParameter) {
    return parameter.initializer ? '(default ' + parameter.initializer + ')' : '';
  }
}
