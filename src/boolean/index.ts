import {NgModule} from '@angular/core';

import {IsEqualToPipe} from './is-equal-to.pipe';
import {IsGreaterThanOrEqualToPipe} from './is-greater-than-or-equal-to.pipe';
import {IsGreaterThanPipe} from './is-greater-than.pipe';
import {IsIdenticalToPipe} from './is-identical-to.pipe';
import {IsLessThanOrEqualToPipe} from './is-less-than-or-equal-to.pipe';
import {IsLessThanPipe} from './is-less-than.pipe';
import {IsNotEqualToPipe} from './is-not-equal-to.pipe';
import {IsNotIdenticalToPipe} from './is-not-identical-to.pipe';
import {IsNullPipe} from './is-null.pipe';

export * from './is-equal-to.pipe';
export * from './is-greater-than-or-equal-to.pipe';
export * from './is-greater-than.pipe';
export * from './is-identical-to.pipe';
export * from './is-less-than-or-equal-to.pipe';
export * from './is-less-than.pipe';
export * from './is-not-equal-to.pipe';
export * from './is-not-identical-to.pipe';
export * from './is-null.pipe';

@NgModule({
  declarations: [
    IsEqualToPipe,
    IsGreaterThanOrEqualToPipe,
    IsGreaterThanPipe,
    IsIdenticalToPipe,
    IsLessThanOrEqualToPipe,
    IsLessThanPipe,
    IsNotEqualToPipe,
    IsNotIdenticalToPipe,
    IsNullPipe
  ],
  exports: [
    IsEqualToPipe,
    IsGreaterThanOrEqualToPipe,
    IsGreaterThanPipe,
    IsIdenticalToPipe,
    IsLessThanOrEqualToPipe,
    IsLessThanPipe,
    IsNotEqualToPipe,
    IsNotIdenticalToPipe,
    IsNullPipe
  ]
})
export class BooleanPipesModule {
}

