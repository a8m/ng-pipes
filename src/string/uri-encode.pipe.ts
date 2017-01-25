import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'uriEncode'})
export class UriEncodePipe implements PipeTransform {
  transform(input: string): string {
    return encodeURI(input);
  }
}
