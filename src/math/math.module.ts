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
import {PowPipe} from './pow.pipe';
import {RadiansPipe} from './radians.pipe';
import {RadixPipe} from './radix.pipe';
import {RoundPipe} from './round.pipe';
import {ShortFmtPipe} from './short-fmt.pipe';
import {SqrtPipe} from './sqrt.pipe';
import {SumPipe} from './sum.pipe';

export {AbsPipe} from './abs.pipe';
export {ByteFmtPipe} from './byte-fmt.pipe';
export {CeilPipe} from './ceil.pipe';
export {KBFmtPipe} from './kb-fmt.pipe';
export {DegreesPipe} from './degrees.pipe';
export {FloorPipe} from './floor.pipe';
export {MaxPipe} from './max.pipe';
export {MinPipe} from './min.pipe';
export {PercentPipe} from './percent.pipe';
export {PowPipe} from './pow.pipe';
export {RadiansPipe} from './radians.pipe';
export {RadixPipe} from './radix.pipe';
export {RoundPipe} from './round.pipe';
export {ShortFmtPipe} from './short-fmt.pipe';
export {SumPipe} from './sum.pipe';
export {SqrtPipe} from './sqrt.pipe';

@NgModule({
  declarations: [
    AbsPipe, ByteFmtPipe, CeilPipe, KBFmtPipe, DegreesPipe, FloorPipe, MaxPipe, MinPipe,
    PercentPipe, PowPipe, RadiansPipe, RadixPipe, RoundPipe, ShortFmtPipe, SumPipe, SqrtPipe
  ],
  exports: [
    AbsPipe, ByteFmtPipe, CeilPipe, KBFmtPipe, DegreesPipe, FloorPipe, MaxPipe, MinPipe,
    PercentPipe, PowPipe, RadiansPipe, RadixPipe, RoundPipe, ShortFmtPipe, SumPipe, SqrtPipe
  ]
})
export class MathPipesModule {
}
