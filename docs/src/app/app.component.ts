import {Component, Pipe} from '@angular/core';
import * as ngPipes from 'ng-pipes';
import * as syntax from '../../syntax.json';
import * as jasmineSyntax from '../../jasmine-syntax.json';
import { SyntaxPipe } from '../../scripts/syntax-types';
import 'reflect-metadata';

export interface DataPipe extends SyntaxPipe {
  name: string;
  object: any;
  instances: string[];
}

@Component({
  selector: 'np-root',
  template: `
    <nav>
      <div class="search align-center">
        <label>Search<input type="text" name="name" placeholder="Name" (keyup)="name=$event.target.value"></label>
      </div>
      <section class="modules">
        <section *ngFor="let moduleName of pipes | map: 'moduleName' | uniq">
          <h2>{{ moduleName }}</h2>
          <button *ngFor="let pipe of pipes | filterBy: ['moduleName']: moduleName"
                  (click)="clicked(pipe.name)" [ngClass]="{active: name === pipe.name}">
            {{ pipe.name }}
          </button>
        </section>
      </section>
    </nav>
    <section class="pipes">
      <np-pipe *ngFor="let pipe of pipes | fuzzyBy:'name':name" [pipe]="pipe"></np-pipe>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pipes: DataPipe[];
  public name;

  constructor() {
    const pipeObjects = Object.values(ngPipes).filter((pipe: Pipe) => {
      return pipe.name.endsWith('Pipe');
    });
    this.pipes = Object.values(syntax['pipes']).map((pipe: DataPipe) => {
      const pipeObj = pipeObjects.filter((pipeObject: Pipe) => {
        return pipe.className === pipeObject.name;
      })[0];
      if (jasmineSyntax['pipes'][pipe.className]) {
        pipe.instances = jasmineSyntax['pipes'][pipe.className].instances;
      }
      pipe.object = pipeObj;
      pipe.name = pipeObj['__annotations__'][0].name;
      return pipe;
    });
  }

  clicked(name: string) {
    if (this.name === name) {
      this.name = '';
    } else {
      this.name = name;
    }
  }
}
