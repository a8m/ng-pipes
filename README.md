# ng-pipes &nbsp; [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![License][license-image]][license-url] [![Join the chat at https://gitter.im/ng-pipes/Lobby](https://badges.gitter.im/ng-pipes/Lobby.svg)](https://gitter.im/ng-pipes/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> [a8m/angular-filter](https://github.com/a8m/angular-filter) for Angular2

This module works with Angular 2.x.

For the AngularJS 1.x version of this module, please see [angular-filter](https://github.com/a8m/angular-filter).


Installation
------------

```sh
npm install --save ng-pipes
```

or

```sh
yarn add ng-pipes
```

Get Started
------------
There are 3 ways of adding __ng-pipes__ to your project:
  1. [Import all pipes](#all)
  2. [Import pipes by module](#mod)
  3. [Declare specific pipes](#spe)

### <a name="all"></a> Import all pipes

```ts
import { NgPipesModule } from 'ng-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgPipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<h1>
  {{ title | reverse }}
</h1>
```

### <a name="mod"></a> Import pipes by module
```ts
import {BooleanPipesModule, CollectionPipesModule, MathPipesModule, ObjectPipesModule, StringPipesModule} from 'ng-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BooleanPipesModule,     // imports all pipes of the boolean module
    CollectionPipesModule,  // imports all pipes of the collection module
    MathPipesModule,        // imports all pipes of the math module
    ObjectPipesModule,      // imports all pipes of the object module
    StringPipesModule       // imports all pipes of the string module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<h1>
  {{ title | reverse }}
</h1>
```

### <a name="spe"></a> Declare specific pipes 
```ts
import { ReversePipe, CeilPipe, ... } from 'ng-pipes';
// ...

@NgModule({
  declarations: [
    AppComponent, ReversePipe, CeilPipe, ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

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
