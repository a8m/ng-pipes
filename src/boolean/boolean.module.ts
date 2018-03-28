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
import {IsNilPipe} from './is-nil.pipe';
import {IsNotEqualToPipe} from './is-not-equal-to.pipe';
import {IsNotIdenticalToPipe} from './is-not-identical-to.pipe';
import {IsNullPipe} from './is-null.pipe';
import {IsNumberPipe} from './is-number.pipe';
import {IsObjectPipe} from './is-object.pipe';
import {IsStringPipe} from './is-string.pipe';
import {IsUndefinedPipe} from './is-undefined.pipe';

export {IsArrayPipe} from './is-array.pipe';
export {IsDefinedPipe} from './is-defined.pipe';
export {IsEqualToPipe} from './is-equal-to.pipe';
export {IsFunctionPipe} from './is-function.pipe';
export {IsGreaterThanOrEqualToPipe} from './is-greater-than-or-equal-to.pipe';
export {IsGreaterThanPipe} from './is-greater-than.pipe';
export {IsIdenticalToPipe} from './is-identical-to.pipe';
export {IsLessThanOrEqualToPipe} from './is-less-than-or-equal-to.pipe';
export {IsLessThanPipe} from './is-less-than.pipe';
export {IsNilPipe} from './is-nil.pipe';
export {IsNotEqualToPipe} from './is-not-equal-to.pipe';
export {IsNotIdenticalToPipe} from './is-not-identical-to.pipe';
export {IsNullPipe} from './is-null.pipe';
export {IsNumberPipe} from './is-number.pipe';
export {IsObjectPipe} from './is-object.pipe';
export {IsStringPipe} from './is-string.pipe';
export {IsUndefinedPipe} from './is-undefined.pipe';

@NgModule({
  declarations: [
    IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe,
    IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNilPipe,
    IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe,
    IsUndefinedPipe
  ],
  exports: [
    IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe,
    IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNilPipe,
    IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe,
    IsUndefinedPipe
  ]
})
export class BooleanPipesModule {
}
