import {NgModule} from '@angular/core';

import {IsNullPipe} from './is-null.pipe';

export * from './is-null.pipe';

@NgModule({
    declarations: [
      IsNullPipe,
    ],
    exports: [
      IsNullPipe,
    ]
})
export class BooleanPipesModule {}
