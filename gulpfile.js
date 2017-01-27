'use strict';
const gulp = require('gulp'), clean = require('gulp-clean');

gulp.task(
    'clean',
    () => gulp.src([
                'src/**/*.ngfactory.ts', 'src/**/*.js', 'src/**/*.d.ts', 'src/**/*.js.map',
                'src/**/*.metadata.json', 'test/**/*.js', 'test/**/*.map', 'test/**/*.d.ts'
              ])
              .pipe(clean()));
