import {NgModule} from '@angular/core';

import {AbsPipe} from './abs.pipe';
import {ByteFmtPipe} from './byte-fmt.pipe';
import {KBFmtPipe} from './kb-fmt.pipe';
import {DegreesPipe} from './degrees.pipe';
import {MaxPipe} from './max.pipe';
import {MinPipe} from './min.pipe';
import {PercentPipe} from './percent.pipe';
import {RadiansPipe} from './radians.pipe';
import {RadixPipe} from './radix.pipe';
import {ShortFmtPipe} from './short-fmt.pipe';
import {SumPipe} from './sum.pipe';

export * from './abs.pipe';
export * from './byte-fmt.pipe';
export * from './kb-fmt.pipe';
export * from './degrees.pipe';
export * from './max.pipe';
export * from  './min.pipe';
export * from './percent.pipe';
export * from './radians.pipe';
export * from './radix.pipe';
export * from './short-fmt.pipe';
export * from './sum.pipe';

@NgModule({
    declarations: [
      AbsPipe,
      ByteFmtPipe,
      KBFmtPipe,
      DegreesPipe,
      MaxPipe,
      MinPipe,
      PercentPipe,
      RadiansPipe,
      RadixPipe,
      ShortFmtPipe,
      SumPipe,
    ],
    exports: [
      AbsPipe,
      ByteFmtPipe,
      KBFmtPipe,
      DegreesPipe,
      MaxPipe,
      MinPipe,
      PercentPipe,
      RadiansPipe,
      RadixPipe,
      ShortFmtPipe,
      SumPipe,
    ]
})
export class MathPipesModule {}
