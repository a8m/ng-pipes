import {Pipe, PipeTransform} from '@angular/core';
import {Parameter} from '../syntax-parser';

enum translator {
  any = 118,      // ts.SyntaxKind.AnyKeyword
  boolean = 121,  // ts.SyntaxKind.BooleanKeyword,
  number = 132,   // ts.SyntaxKind.NumberKeyword,
  string = 134,   // ts.SyntaxKind.StringKeyword,
  // unknown = 157 // ts.SyntaxKind.TypeReference,
  // unknown = 161 // ts.SyntaxKind.TypeLiteral,
  Array = 162  // ts.SyntaxKind.ArrayType
}

@Pipe({name: 'npParameterKind'})
export class ParameterKindPipe implements PipeTransform {
  transform(parameter: Parameter) {
    return translator[parameter.kind] ? translator[parameter.kind] : '[unknown]';
  }
}
