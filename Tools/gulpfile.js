var gulp = require('gulp');

/* gulp.task('default', function() {
  console.log('Hello, gulp!');
});
*/
gulp.task('default', [ 'tsc' ]);

var ts = require('gulp-typescript');

var tslint = require('gulp-tslint');

gulp.task('lint', function() {
    return gulp.src([
      './source/ts/calculator.ts'
    ]).pipe(tslint(), { emitError : false})
      .pipe(tslint.report('verbose', { emitError : false}));
});

var tsProject = ts.createProject({
  removeComments : true,
  noImplicitAny : true,
  target: 'ES3',
  module: 'commonjs',
  declarationFiles: false
});

gulp.task('tsc', function() {
  return gulp.src('./source/ts/**/**.ts')
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('./temp/source/js'));
});