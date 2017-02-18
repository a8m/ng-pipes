import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'np-header',
  template: `
    <div class="align-center">
        <a href="/" class="logo"></a>
        <div *ngIf="!error">
            <h1>ng-pipes</h1>
            <a href="https://www.npmjs.com/package/ng-pipes" class="version" [ngClass]="version">{{ version }}</a>
        </div>
    </div>`
})

export class HeaderComponent {
  public version = 'loading..';
  public error = false;

  constructor(private http: Http) {
    this.http.get('https://unpkg.com/ng-pipes/package.json')
        .subscribe(
            (pkg) => {
              this.version = pkg.json().version;
            },
            () => {
              this.error = true;
            });
  }
}
