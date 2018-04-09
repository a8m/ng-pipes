import {NgModule} from '@angular/core';

import {CamelizePipe} from './camelize.pipe';
import {CenterPadPipe} from './center-pad.pipe';
import {EndsWithPipe} from './ends-with.pipe';
import {LatinizePipe} from './latinize.pipe';
import {LeftPadPipe} from './left-pad.pipe';
import {LeftTrimPipe} from './ltrim.pipe';
import {MatchPipe} from './match.pipe';
import {PhonePipe} from './phone.pipe';
import {RepeatPipe} from './repeat.pipe';
import {RightPadPipe} from './right-pad.pipe';
import {RightTrimPipe} from './rtrim.pipe';
import {SlugifyPipe} from './slugify.pipe';
import {SplitPipe} from './split.pipe';
import {StartsWithPipe} from './starts-with.pipe';
import {StringularPipe} from './stringular.pipe';
import {StripTagsPipe} from './strip-tags.pipe';
import {TestPipe} from './test.pipe';
import {TitleizePipe} from './titleize.pipe';
import {TrimPipe} from './trim.pipe';
import {TruncatePipe} from './truncate.pipe';
import {UcfirstPipe} from './ucfirst.pipe';
import {UnderscorePipe} from './underscore.pipe';
import {UriComponentEncodePipe} from './uri-component-encode.pipe';
import {UriEncodePipe} from './uri-encode.pipe';
import {WrapPipe} from './wrap.pipe';

@NgModule({
  declarations: [
    CamelizePipe,
    CenterPadPipe,
    EndsWithPipe,
    LatinizePipe,
    LeftPadPipe,
    LeftTrimPipe,
    MatchPipe,
    PhonePipe,
    RepeatPipe,
    RightPadPipe,
    RightTrimPipe,
    SlugifyPipe,
    SplitPipe,
    StartsWithPipe,
    StringularPipe,
    StripTagsPipe,
    TestPipe,
    TitleizePipe,
    TrimPipe,
    TruncatePipe,
    UcfirstPipe,
    UnderscorePipe,
    UriComponentEncodePipe,
    UriEncodePipe,
    WrapPipe
  ],
  exports: [
    CamelizePipe,
    CenterPadPipe,
    EndsWithPipe,
    LatinizePipe,
    LeftPadPipe,
    LeftTrimPipe,
    MatchPipe,
    PhonePipe,
    RepeatPipe,
    RightPadPipe,
    RightTrimPipe,
    SlugifyPipe,
    SplitPipe,
    StartsWithPipe,
    StringularPipe,
    StripTagsPipe,
    TestPipe,
    TitleizePipe,
    TrimPipe,
    TruncatePipe,
    UcfirstPipe,
    UnderscorePipe,
    UriComponentEncodePipe,
    UriEncodePipe,
    WrapPipe
  ]
})
export class StringPipesModule {}
