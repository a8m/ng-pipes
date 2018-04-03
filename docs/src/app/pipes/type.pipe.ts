import {Pipe, PipeTransform} from '@angular/core';
import { SyntaxKind } from 'typescript';

@Pipe({name: 'npType'})
export class TypePipe implements PipeTransform {
  transform(kind: SyntaxKind): string {
    return SyntaxKind[kind];
  }
}
