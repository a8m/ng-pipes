import {NgModule} from '@angular/core';

import {AbsPipe} from './abs.pipe';
import {ByteFmtPipe} from './byte-fmt.pipe';
import {CeilPipe} from './ceil.pipe';
import {DegreesPipe} from './degrees.pipe';
import {FloorPipe} from './floor.pipe';
import {KBFmtPipe} from './kb-fmt.pipe';
import {MaxPipe} from './max.pipe';
import {MinPipe} from './min.pipe';
import {PercentPipe} from './percent.pipe';
import {RadiansPipe} from './radians.pipe';
import {RadixPipe} from './radix.pipe';
import {ShortFmtPipe} from './short-fmt.pipe';
import {SqrtPipe} from './sqrt.pipe';
import {SumPipe} from './sum.pipe';

export * from './abs.pipe';
export * from './byte-fmt.pipe';
export * from './ceil.pipe';
export * from './kb-fmt.pipe';
export * from './degrees.pipe';
export * from './floor.pipe';
export * from './max.pipe';
export * from './min.pipe';
export * from './percent.pipe';
export * from './radians.pipe';
export * from './radix.pipe';
export * from './short-fmt.pipe';
export * from './sum.pipe';
export * from './sqrt.pipe';

@NgModule({
  declarations: [
    AbsPipe, ByteFmtPipe, CeilPipe, KBFmtPipe, DegreesPipe, FloorPipe, MaxPipe, MinPipe,
    PercentPipe, RadiansPipe, RadixPipe, ShortFmtPipe, SumPipe, SqrtPipe
  ],
  exports: [
    AbsPipe, ByteFmtPipe, CeilPipe, KBFmtPipe, DegreesPipe, FloorPipe, MaxPipe, MinPipe,
    PercentPipe, RadiansPipe, RadixPipe, ShortFmtPipe, SumPipe, SqrtPipe
  ]
})
export class MathPipesModule {
}
