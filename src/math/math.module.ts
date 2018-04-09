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
export class MathPipesModule {}
