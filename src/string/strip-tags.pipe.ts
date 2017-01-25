import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'stripTags'})
export class StripTagsPipe implements PipeTransform {
  transform(input: string): string {
    return input.replace(/<\S[^><]*>/g, '');
  }
}
