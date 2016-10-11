import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uriComponentEncode'
})
export class UriComponentEncodePipe implements PipeTransform {
  transform(input: string): string {
    return encodeURIComponent(input);
  }
}
