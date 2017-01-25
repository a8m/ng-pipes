import {NgModule} from '@angular/core';

import {AfterWherePipe} from './after-where.pipe';
import {AfterPipe} from './after.pipe';
import {BeforeWherePipe} from './before-where.pipe';
import {BeforePipe} from './before.pipe';
import {ChunkByPipe} from './chunk-by.pipe';
import {ConcatPipe} from './concat.pipe';
import {ContainsPipe} from './contains.pipe';
import {CountByPipe} from './count-by.pipe';
import {DefaultsPipe} from './defaults.pipe';
import {EveryPipe} from './every.pipe';
import {FilterByPipe} from './filter-by.pipe';
import {FirstPipe} from './first.pipe';
import {FlattenPipe} from './flatten.pipe';
import {FuzzyByPipe} from './fuzzy-by.pipe';
import {FuzzyPipe} from './fuzzy.pipe';
import {GroupByPipe} from './group-by.pipe';
import {IsEmptyPipe} from './is-empty.pipe';
import {JoinPipe} from './join.pipe';
import {LastPipe} from './last.pipe';
import {MapPipe} from './map.pipe';
import {OmitPipe} from './omit.pipe';
import {OrderByPipe} from './order-by.pipe';
import {PickPipe} from './pick.pipe';
import {RangePipe} from './range.pipe';
import {RemoveWithPipe} from './remove-with.pipe';
import {RemovePipe} from './remove.pipe';
import {ReversePipe} from './reverse.pipe';
import {SearchFieldPipe} from './search-field.pipe';
import {ToArrayPipe} from './to-array.pipe';
import {UniqPipe} from './uniq.pipe';
import {WherePipe} from './where.pipe';
import {XORPipe} from './xor.pipe';

export * from './after-where.pipe';
export * from './before-where.pipe';
export * from './after.pipe';
export * from './before.pipe';
export * from './chunk-by.pipe';
export * from './concat.pipe';
export * from './contains.pipe';
export * from './count-by.pipe';
export * from './defaults.pipe';
export * from './every.pipe';
export * from './filter-by.pipe';
export * from './first.pipe';
export * from './flatten.pipe';
export * from './fuzzy-by.pipe';
export * from './fuzzy.pipe';
export * from './group-by.pipe';
export * from './is-empty.pipe';
export * from './join.pipe';
export * from './last.pipe';
export * from './map.pipe';
export * from './omit.pipe';
export * from './pick.pipe';
export * from './range.pipe';
export * from './remove-with.pipe';
export * from './remove.pipe';
export * from './reverse.pipe';
export * from './search-field.pipe';
export * from './to-array.pipe';
export * from './uniq.pipe';
export * from './where.pipe';
export * from './xor.pipe';
export * from './order-by.pipe';

@NgModule({
  declarations: [
    AfterWherePipe, BeforeWherePipe, AfterPipe,    BeforePipe,  ChunkByPipe,  ConcatPipe,
    ContainsPipe,   CountByPipe,     DefaultsPipe, EveryPipe,   FilterByPipe, FirstPipe,
    FlattenPipe,    FuzzyByPipe,     FuzzyPipe,    GroupByPipe, IsEmptyPipe,  JoinPipe,
    LastPipe,       MapPipe,         OmitPipe,     PickPipe,    RangePipe,    RemoveWithPipe,
    ReversePipe,    SearchFieldPipe, RemovePipe,   ToArrayPipe, UniqPipe,     WherePipe,
    XORPipe,        OrderByPipe,
  ],
  exports: [
    AfterWherePipe, BeforeWherePipe, AfterPipe,    BeforePipe,  ChunkByPipe,  ConcatPipe,
    ContainsPipe,   CountByPipe,     DefaultsPipe, EveryPipe,   FilterByPipe, FirstPipe,
    FlattenPipe,    FuzzyByPipe,     FuzzyPipe,    GroupByPipe, IsEmptyPipe,  JoinPipe,
    LastPipe,       MapPipe,         OmitPipe,     PickPipe,    RangePipe,    RemoveWithPipe,
    ReversePipe,    SearchFieldPipe, RemovePipe,   ToArrayPipe, UniqPipe,     WherePipe,
    XORPipe,        OrderByPipe,
  ]
})
export class CollectionPipesModule {
}
