import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as syntax from '../../../syntax.json';

@Component({
  selector: 'np-header',
  template: `
    <div class="align-center">
      <!--<a href="/" class="logo"></a>
      <div *ngIf="!error">
        <h1>ng-pipes</h1>
        <a href="https://www.npmjs.com/package/ng-pipes" class="version" [ngClass]="version">{{ version }}</a>
      </div>-->
    </div>`
})

export class HeaderComponent {
  public version = syntax['version'];
  public error = false;

  constructor(private http: HttpClient) {
  }
}
