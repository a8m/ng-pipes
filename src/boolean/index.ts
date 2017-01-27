import {NgModule} from '@angular/core';

import {IsArrayPipe} from './is-array.pipe';
import {IsDefinedPipe} from './is-defined.pipe';
import {IsEqualToPipe} from './is-equal-to.pipe';
import {IsFunctionPipe} from './is-function.pipe';
import {IsGreaterThanOrEqualToPipe} from './is-greater-than-or-equal-to.pipe';
import {IsGreaterThanPipe} from './is-greater-than.pipe';
import {IsIdenticalToPipe} from './is-identical-to.pipe';
import {IsLessThanOrEqualToPipe} from './is-less-than-or-equal-to.pipe';
import {IsLessThanPipe} from './is-less-than.pipe';
import {IsNotEqualToPipe} from './is-not-equal-to.pipe';
import {IsNotIdenticalToPipe} from './is-not-identical-to.pipe';
import {IsNullPipe} from './is-null.pipe';
import {IsNumberPipe} from './is-number.pipe';
import {IsObjectPipe} from './is-object.pipe';
import {IsStringPipe} from './is-string.pipe';
import {IsUndefinedPipe} from './is-undefined.pipe';

export * from './is-array.pipe';
export * from './is-defined.pipe';
export * from './is-equal-to.pipe';
export * from './is-function.pipe';
export * from './is-greater-than-or-equal-to.pipe';
export * from './is-greater-than.pipe';
export * from './is-identical-to.pipe';
export * from './is-less-than-or-equal-to.pipe';
export * from './is-less-than.pipe';
export * from './is-not-equal-to.pipe';
export * from './is-not-identical-to.pipe';
export * from './is-null.pipe';
export * from './is-number.pipe';
export * from './is-object.pipe';
export * from './is-string.pipe';
export * from './is-undefined.pipe';

@NgModule({
  declarations: [
    IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe,
    IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNotEqualToPipe,
    IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe
  ],
  exports: [
    IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe,
    IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNotEqualToPipe,
    IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe
  ]
})
export class BooleanPipesModule {
}
