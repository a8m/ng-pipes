import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'match'})
export class MatchPipe implements PipeTransform {
  transform(input: string, pattern?: string, flag?: string): RegExpMatchArray {
    return input.match(new RegExp(pattern, flag));
  }
}
