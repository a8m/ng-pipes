import {Component, Pipe} from '@angular/core';
import * as ngPipes from 'ng-pipes';
const syntax = require('syntax.json');

@Component({
  selector: 'np-app',
  template: `
    <nav>
      <div class="search align-center">
        <label>Search<input type="text" name="name" placeholder="Name" (keyup)="name=$event.target.value"></label>
      </div>
      <section class="modules">
        <section *ngFor="let moduleName of pipes | map: 'moduleName' | uniq">
          <h2>{{ moduleName }}</h2>
          <button *ngFor="let pipe of pipes | filterBy: ['moduleName']: moduleName" (click)="clicked(pipe.name)" [ngClass]="{active: name === pipe.name}">{{ pipe.name }}</button>
        </section>
      </section>
    </nav>
    <section class="pipes">
      <np-pipe *ngFor="let pipe of pipes | fuzzyBy:'name':name" [pipe]="pipe"></np-pipe>
    </section>
`
})

export class AppComponent {
  public pipes;
  public name;

  constructor() {
    let pipeObjects = Object.values(ngPipes).filter((pipe: Pipe) => {
      return pipe.name.endsWith('Pipe');
    });
    this.pipes = Object.values(syntax).map((pipe: any) => {
      let pipeObj = pipeObjects.filter((pipeObject: Pipe) => {
        return pipe.className === pipeObject.name;
      })[0];
      pipe.object = pipeObj;
      pipe.name = Reflect.getMetadata('annotations', pipeObj)[0].name;
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
