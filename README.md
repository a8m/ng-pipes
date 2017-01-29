# ng-pipes &nbsp; [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![License][license-image]][license-url] [![Join the chat at https://gitter.im/ng-pipes/Lobby](https://badges.gitter.im/ng-pipes/Lobby.svg)](https://gitter.im/ng-pipes/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> [a8m/angular-filter](https://github.com/a8m/angular-filter) for Angular2

This module works with Angular 2.x.

For the AngularJS 1.x version of this module, please see [angular-filter](https://github.com/a8m/angular-filter).


- [Contributing](#contributing)
- [Installation](#installation)

Installation
------------

```sh
npm install --save ng-pipes
```

Get Started
------------
Import __ng-pipes__ to your `app.module.ts`
```ts
import { NgPipesModule } from 'ng-pipes';
// ...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // ...
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Inject it to your class(could be Component, Service, etc..), or use it inside the view(template).  
- `app.component.ts`:  
  ```ts
  import { Component } from '@angular/core';
  import { RepeatPipe } from 'ng-pipes';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RepeatPipe],
  })
  export class AppComponent {
    constructor(private repeater: RepeatPipe) {
      this.repeater = repeater;
    }
    title = "hello world"
    manyTitles = this.repeater.transform(this.title, 10, " ");
  }
  ```

- `app.component.html`:  
  ```html
  <h1>
    {{ title | reverse }}
  </h1>
  ```



### Contributing
- Any contribution is appreciated.
- If you are planning to add a new pipe (or any other feature), please open an issue before.
- Angular [Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) is preferred.

#### Submitting a Pull Request (PR)
1. Clone the project via:
  ```
  $ git clone https://github.com/a8m/ng-pipes.git
  ```
  
2. Make your changes in a new git branch:
  ```
  $ git checkout -b my-cool-branch master
  ```
  
3. Add your changes, including appropriate test cases.

4. Push your branch to Github.

5. Create a PR to master.





[npm-image]: https://img.shields.io/npm/v/ng-pipes.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ng-pipes
[travis-image]: https://img.shields.io/travis/a8m/ng-pipes.svg?style=flat-square
[travis-url]: https://travis-ci.org/a8m/ng-pipes
[license-image]: http://img.shields.io/npm/l/ng-pipes.svg?style=flat-square
[license-url]: LICENSE
