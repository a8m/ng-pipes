import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'test'})
export class TestPipe implements PipeTransform {
  transform(input: string, pattern?: string, flag?: string): boolean {
    return new RegExp(pattern, flag).test(input);
  }
}
