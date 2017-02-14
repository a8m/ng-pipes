import {Component, Input} from '@angular/core';

@Component({
  selector: 'np-pipe',
  template: `
    <h3>{{ pipe.name }}</h3>
    <ul class="parameters">
      <li *ngFor="let parameter of pipe.parameters">{{ parameter | npParameterKind }} {{ parameter | npParameterDefault }}</li>
    </ul>
    <pre>
      <code class="prettyprint lang-html">
        {{ '<section *ngFor="let item of items | ' + pipe.name + ':' }}<template ngFor let-parameter [ngForOf]="pipe.parameters">{{ parameter.name }}:</template>{{ '">' }}
      </code>
    </pre>
`
})

export class PipeComponent {
  @Input() pipe: any;
}
