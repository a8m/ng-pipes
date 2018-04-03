import {Component, Input, Pipe, PipeTransform, OnInit} from '@angular/core';
import { DataPipe } from '../app.component';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'np-pipe',
  template: `
    <h3>{{ pipe.name }} ({{ pipe.object.name }})</h3>
    <ul class="parameters">
      <li *ngFor="let parameter of pipe.parameters">
        {{ parameter.kind | npType }} {{ parameter | npParameterDefault }}
      </li>
    </ul>
    <!--<pre>
      <code class="prettyprint lang-html">
        {{ '<p *ngFor="let item of items | ' + pipe.name }}<ng-template ngFor let-parameter [ngForOf]="pipe.parameters | after:1">:{{ parameter.name }}</ng-template>&#034;&#062;
          {{ '\\{\\{ item | json \\}\\}' }}
        &#060;&#047;p&#062;
      </code>
    </pre>-->
    <!--<input type="text" *ngFor="let parameter of pipe.parameters | after:1" [attr.placeholder]="parameter.name"/>-->
    <p>returns: {{ pipe.returns | npType }}</p>

    <mat-button-toggle-group #group="matButtonToggleGroup">
      <mat-button-toggle *ngFor="let instance of pipe.instances" [value]="instance">
        <ng-template ngFor let-value [ngForOf]="instance">
          {{ value }}
        </ng-template>
      </mat-button-toggle>
    </mat-button-toggle-group>
    <div class="example-selected-value">Selected value: {{group.value}}</div>

    <select [(ngModel)]="_instance" (ngModelChange)="change.next($event)">
      <option *ngFor="let instance of pipe.instances" [ngValue]="instance">
        <ng-template ngFor let-value [ngForOf]="instance">
          {{ value }}
        </ng-template>
      </option>
    </select>
    <div class="result">
      <!--{{ _instance | _pipeInstance }}-->
      {{ result }}
    </div>
`
})

export class PipeComponent implements OnInit {
  @Input() pipe: DataPipe;
  change = new Subject();
  result: any;

  _pipeInstance: any;
  _instance: any;


  constructor() {
    this.change.subscribe((value: any[]) => {
      this.result = this._pipeInstance.transform(...value);
    });
  }

  ngOnInit() {
    this._pipeInstance = new this.pipe.object();
    if (this.pipe.instances && this.pipe.instances[0]) {
      this._instance = this.pipe.instances[0];
    }
    this.change.next(this._instance);
  }
}
